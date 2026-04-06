import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { caseBlocksRegistry } from "@/Components/CasesTemplates/registry";
import { isAdminUser } from "@/lib/adminAuth";
import { revalidateCasePages } from "@/lib/casesRevalidate";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!isAdminUser(session?.user)) {
    return NextResponse.json({ message: "Не авторизований" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const caseId = Number(body.caseId);
    const type = String(body.type ?? "");
    const data = body.data;

    if (!Number.isInteger(caseId)) {
      return NextResponse.json({ message: "Некоректний caseId" }, { status: 400 });
    }

    if (!(type in caseBlocksRegistry)) {
      return NextResponse.json({ message: "Невідомий тип блоку" }, { status: 400 });
    }

    const existingCase = await prisma.case.findUnique({
      where: { id: caseId },
      select: { id: true, slug: true },
    });

    if (!existingCase) {
      return NextResponse.json({ message: "Кейс не знайдено" }, { status: 404 });
    }

    const lastBlock = await prisma.caseBlock.findFirst({
      where: { caseId },
      orderBy: { order: "desc" },
      select: { order: true },
    });

    const created = await prisma.caseBlock.create({
      data: {
        caseId,
        type,
        data: data ?? {},
        order: (lastBlock?.order ?? -1) + 1,
      },
    });

    revalidateCasePages({ slug: existingCase.slug, caseId });

    return NextResponse.json({ message: "Блок додано", block: created }, { status: 201 });
  } catch (error) {
    console.error("CREATE_CASE_BLOCK_ERROR", error);
    return NextResponse.json({ message: "Помилка сервера" }, { status: 500 });
  }
}
