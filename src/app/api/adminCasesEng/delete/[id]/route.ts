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
  const caseId = Number(id);

  if (Number.isNaN(caseId)) {
    return NextResponse.json({ message: "Некоректний id" }, { status: 400 });
  }

  try {
    await prisma.caseEng.delete({
      where: {
        id: caseId,
      },
    });

    return NextResponse.json({ message: "Англ. кейс видалено" }, { status: 200 });
  } catch (error) {
    console.error("DELETE_CASE_ENG_ERROR", error);
    return NextResponse.json({ message: "Помилка сервера" }, { status: 500 });
  }
}
