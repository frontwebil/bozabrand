import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> },
) {
  const session = await getServerSession(authOptions);
  const envLogin = process.env.AUTH_LOGIN?.toLowerCase().trim();

  if (
    !session?.user?.login ||
    session.user.login.toLowerCase().trim() !== envLogin ||
    session.user.role !== "admin"
  ) {
    return NextResponse.json({ message: "Не авторизований" }, { status: 401 });
  }

  const { id } = await context.params;
  const caseId = Number(id);

  if (Number.isNaN(caseId)) {
    return NextResponse.json({ message: "Некоректний id" }, { status: 400 });
  }

  try {
    await prisma.case.delete({
      where: {
        id: caseId,
      },
    });

    revalidatePath("/cases");

    return NextResponse.json({ message: "Кейс видалено" }, { status: 200 });
  } catch (error) {
    console.error("DELETE_CASE_ERROR", error);
    return NextResponse.json({ message: "Помилка сервера" }, { status: 500 });
  }
}
