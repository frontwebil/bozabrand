import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { isAdminUser } from "@/lib/adminAuth";
import { prisma } from "@/lib/prisma";
import { revalidateCasePages } from "@/lib/casesRevalidate";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!isAdminUser(session?.user)) {
    return NextResponse.json({ message: "Не авторизований" }, { status: 401 });
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

    const existingCase = await prisma.case.findUnique({
      where: {
        slug: slug.trim(),
      },
    });

    if (existingCase) {
      return NextResponse.json(
        { message: "Кейс з таким slug вже існує" },
        { status: 400 },
      );
    }

    const createdCase = await prisma.case.create({
      data: {
        title: title.trim(),
        subTitle: subTitle.trim(),
        slug: slug.trim(),
        imgUrl: imgUrl.url,
        categories: Array.isArray(categories)
          ? categories.map((item: string) => item.trim()).filter(Boolean)
          : [],
        isPublished: Boolean(isPublished),
        order: Number(order) || 0,
      },
    });

    revalidateCasePages({});

    return NextResponse.json(
      {
        message: "Кейс успішно створений",
        case: createdCase,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("CREATE_CASE_ERROR", error);

    return NextResponse.json({ message: "Помилка сервера" }, { status: 500 });
  }
}
