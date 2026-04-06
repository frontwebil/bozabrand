import { EditCaseForm } from "@/Components/AdminComponents/EditCaseForm/EditCaseForm";
import { requireAdminSessionOrRedirect } from "@/lib/adminAuth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function EditCase({ params }: { params: { id: number } }) {
  const { id } = await params;
  await requireAdminSessionOrRedirect("/admin-boza");

  const caseItem = await prisma.case.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!caseItem) {
    redirect("/admin-boza/cases");
  }

  return <EditCaseForm caseItem={caseItem} />;
}
