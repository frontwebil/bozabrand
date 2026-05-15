import { EditCaseFormEng } from "@/Components/AdminComponents/EditCaseFormEng/EditCaseFormEng";
import { requireAdminSessionOrRedirect } from "@/lib/adminAuth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function EditCaseEngPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ ukrId?: string }>;
}) {
  const { id } = await params;
  const { ukrId } = await searchParams;
  await requireAdminSessionOrRedirect("/admin-boza");

  const caseItem = await prisma.caseEng.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!caseItem) {
    redirect("/admin-boza/cases");
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

  return <EditCaseFormEng caseItem={caseItem} ukrCaseId={ukrCaseId} />;
}
