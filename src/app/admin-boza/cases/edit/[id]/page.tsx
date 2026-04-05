import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { EditCaseForm } from "@/Components/AdminComponents/EditCaseForm/EditCaseForm";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function EditCase({ params }: { params: { id: number } }) {
  const { id } = await params;
  const session = await getServerSession(authOptions);
  const envLogin = process.env.AUTH_LOGIN?.toLowerCase().trim();

  if (
    !session?.user?.login ||
    session.user.login !== envLogin ||
    session.user.role !== "admin"
  ) {
    redirect("/admin-boza");
  }

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
