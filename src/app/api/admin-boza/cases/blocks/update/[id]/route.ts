import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { isAdminUser } from "@/lib/adminAuth";
import { revalidateCasePages } from "@/lib/casesRevalidate";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const session = await getServerSession(authOptions);
  if (!isAdminUser(session?.user)) {
    return NextResponse.json({ message: "Не авторизований" }, { status: 401 });
  }

  const { id } = await context.params;
  const blockId = Number(id);

  if (!Number.isInteger(blockId)) {
    return NextResponse.json({ message: "Некоректний id блоку" }, { status: 400 });
  }

  try {
    const body = await req.json();
    const data = body.data;

    const existing = await prisma.caseBlock.findUnique({
      where: { id: blockId },
      include: { case: { select: { id: true, slug: true } } },
    });

    if (!existing) {
      return NextResponse.json({ message: "Блок не знайдено" }, { status: 404 });
    }

    const updated = await prisma.caseBlock.update({
      where: { id: blockId },
      data: { data: data ?? {} },
    });

    revalidateCasePages({ slug: existing.case.slug, caseId: existing.case.id });

    return NextResponse.json({ message: "Блок оновлено", block: updated }, { status: 200 });
  } catch (error) {
    console.error("UPDATE_CASE_BLOCK_ERROR", error);
    return NextResponse.json({ message: "Помилка сервера" }, { status: 500 });
  }
}
