import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { isAdminUser } from "@/lib/adminAuth";
import { revalidateCasePages } from "@/lib/casesRevalidate";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!isAdminUser(session?.user)) {
    return NextResponse.json({ message: "Не авторизований" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const caseId = Number(body.caseId);
    const orderedBlockIds = Array.isArray(body.orderedBlockIds)
      ? body.orderedBlockIds.map((id: unknown) => Number(id)).filter(Number.isInteger)
      : [];

    if (!Number.isInteger(caseId) || orderedBlockIds.length === 0) {
      return NextResponse.json(
        { message: "Передай caseId та orderedBlockIds" },
        { status: 400 },
      );
    }

    const caseItem = await prisma.case.findUnique({
      where: { id: caseId },
      select: { id: true, slug: true },
    });

    if (!caseItem) {
      return NextResponse.json({ message: "Кейс не знайдено" }, { status: 404 });
    }

    const blocks = await prisma.caseBlock.findMany({
      where: { caseId },
      select: { id: true },
    });

    if (blocks.length !== orderedBlockIds.length) {
      return NextResponse.json(
        { message: "Список блоків некоректний" },
        { status: 400 },
      );
    }

    const existingIds = new Set(blocks.map((b) => b.id));
    const isValidOrder = orderedBlockIds.every((id: number) => existingIds.has(id));

    if (!isValidOrder) {
      return NextResponse.json(
        { message: "Список блоків містить невалідні id" },
        { status: 400 },
      );
    }

    await prisma.$transaction(
      orderedBlockIds.map((id: number, index: number) =>
        prisma.caseBlock.update({
          where: { id },
          data: { order: index },
        }),
      ),
    );

    revalidateCasePages({ slug: caseItem.slug, caseId });

    return NextResponse.json({ message: "Порядок оновлено" }, { status: 200 });
  } catch (error) {
    console.error("REORDER_CASE_BLOCK_ERROR", error);
    return NextResponse.json({ message: "Помилка сервера" }, { status: 500 });
  }
}
