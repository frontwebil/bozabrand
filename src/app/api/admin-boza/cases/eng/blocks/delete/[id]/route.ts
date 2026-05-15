import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { isAdminUser } from "@/lib/adminAuth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function DELETE(
  _req: Request,
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
    const existing = await prisma.caseBlockEng.findUnique({
      where: { id: blockId },
    });

    if (!existing) {
      return NextResponse.json({ message: "Блок не знайдено" }, { status: 404 });
    }

    await prisma.$transaction(async (tx) => {
      await tx.caseBlockEng.delete({ where: { id: blockId } });

      const remaining = await tx.caseBlockEng.findMany({
        where: { caseId: existing.caseId },
        orderBy: { order: "asc" },
        select: { id: true },
      });

      await Promise.all(
        remaining.map((block, index) =>
          tx.caseBlockEng.update({
            where: { id: block.id },
            data: { order: index },
          }),
        ),
      );
    });

    return NextResponse.json({ message: "Блок видалено" }, { status: 200 });
  } catch (error) {
    console.error("DELETE_CASE_BLOCK_ENG_ERROR", error);
    return NextResponse.json({ message: "Помилка сервера" }, { status: 500 });
  }
}
