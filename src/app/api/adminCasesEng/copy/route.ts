import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { isAdminUser } from "@/lib/adminAuth";
import {
  copyEngCaseToUkr,
  copyUkrCaseToEng,
  createEngCaseFromUkr,
} from "@/lib/adminCasesCopy";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!isAdminUser(session?.user)) {
    return NextResponse.json({ message: "Не авторизований" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const direction = String(body.direction ?? "");
    const ukrCaseId = Number(body.ukrCaseId);
    const engCaseId = Number(body.engCaseId);

    if (direction === "create-eng-from-ukr") {
      if (!Number.isInteger(ukrCaseId)) {
        return NextResponse.json(
          { message: "Передай ukrCaseId" },
          { status: 400 },
        );
      }

      const created = await createEngCaseFromUkr(ukrCaseId);
      return NextResponse.json(
        { message: "Англ. версію створено з укр", case: created },
        { status: 201 },
      );
    }

    if (direction === "ukr-to-eng") {
      if (!Number.isInteger(ukrCaseId) || !Number.isInteger(engCaseId)) {
        return NextResponse.json(
          { message: "Передай ukrCaseId та engCaseId" },
          { status: 400 },
        );
      }

      const updated = await copyUkrCaseToEng(ukrCaseId, engCaseId);
      return NextResponse.json(
        { message: "Скопійовано з укр версії", case: updated },
        { status: 200 },
      );
    }

    if (direction === "eng-to-ukr") {
      if (!Number.isInteger(ukrCaseId) || !Number.isInteger(engCaseId)) {
        return NextResponse.json(
          { message: "Передай ukrCaseId та engCaseId" },
          { status: 400 },
        );
      }

      const updated = await copyEngCaseToUkr(engCaseId, ukrCaseId);
      return NextResponse.json(
        { message: "Скопійовано з англ версії", case: updated },
        { status: 200 },
      );
    }

    return NextResponse.json(
      { message: "Невідомий direction" },
      { status: 400 },
    );
  } catch (error) {
    console.error("COPY_CASE_ERROR", error);

    if (error instanceof Error) {
      if (error.message === "UKR_CASE_NOT_FOUND") {
        return NextResponse.json(
          { message: "Укр кейс не знайдено" },
          { status: 404 },
        );
      }
      if (error.message === "ENG_CASE_NOT_FOUND") {
        return NextResponse.json(
          { message: "Англ. кейс не знайдено" },
          { status: 404 },
        );
      }
      if (error.message === "ENG_SLUG_EXISTS") {
        return NextResponse.json(
          { message: "Англ. кейс з таким slug вже існує" },
          { status: 400 },
        );
      }
    }

    return NextResponse.json({ message: "Помилка сервера" }, { status: 500 });
  }
}
