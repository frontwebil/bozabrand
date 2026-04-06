import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { isAdminUser } from "@/lib/adminAuth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { revalidateCasePages } from "@/lib/casesRevalidate";

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const session = await getServerSession(authOptions);

  if (!isAdminUser(session?.user)) {
    return NextResponse.json({ message: "Не авторизований" }, { status: 401 });
  }

  const { id } = await context.params;
  const caseId = Number(id);

  if (Number.isNaN(caseId)) {
    return NextResponse.json({ message: "Некоректний id" }, { status: 400 });
  }

  try {
    const data = await req.json();

    const { title, subTitle, slug, categories, imgUrl, isPublished, order } =
      data;

    if (!title?.trim() || !subTitle?.trim() || !slug?.trim() || !imgUrl) {
      return NextResponse.json(
        { message: "Заповни всі обов'язкові поля" },
        { status: 400 },
      );
    }

    const existingCase = await prisma.case.findFirst({
      where: {
        slug: slug.trim(),
        NOT: {
          id: caseId,
        },
      },
    });

    if (existingCase) {
      return NextResponse.json(
        { message: "Кейс з таким slug вже існує" },
        { status: 400 },
      );
    }

    const updatedCase = await prisma.case.update({
      where: {
        id: caseId,
      },
      data: {
        title: title.trim(),
        subTitle: subTitle.trim(),
        slug: slug.trim(),
        imgUrl,
        categories: Array.isArray(categories)
          ? categories.map((item: string) => item.trim()).filter(Boolean)
          : [],
        isPublished: Boolean(isPublished),
        order: Number(order) || 0,
      },
    });

    revalidateCasePages({ slug: updatedCase.slug });

    return NextResponse.json(
      {
        message: "Кейс успішно оновлений",
        case: updatedCase,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("UPDATE_CASE_ERROR", error);

    return NextResponse.json({ message: "Помилка сервера" }, { status: 500 });
  }
}
