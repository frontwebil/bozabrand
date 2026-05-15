import { requireAdminSessionOrRedirect } from "@/lib/adminAuth";
import { prisma } from "@/lib/prisma";
import { notFound, redirect } from "next/navigation";
import { ConstructorPage } from "../../../constructor/[id]/ConstructorPage";

export default async function CaseEngConstructorPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ ukrId?: string }>;
}) {
  await requireAdminSessionOrRedirect("/admin-boza");

  const { id } = await params;
  const { ukrId } = await searchParams;

  const caseItem = await prisma.caseEng.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      blocks: {
        orderBy: {
          order: "asc",
        },
      },
    },
  });

  if (!caseItem) {
    return notFound();
  }

  let ukrCaseId = Number(ukrId);

  if (!Number.isInteger(ukrCaseId)) {
    const ukrCase = await prisma.case.findUnique({
      where: { slug: caseItem.slug },
      select: { id: true },
    });

    if (!ukrCase) {
      redirect("/admin-boza/cases");
    }

    ukrCaseId = ukrCase.id;
  }

  return (
    <ConstructorPage
      caseItem={caseItem}
      locale="eng"
      ukrCaseId={ukrCaseId}
    />
  );
}
