import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { AddCaseForm } from "@/Components/AdminComponents/AddCaseForm/AddCaseForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await getServerSession(authOptions);
  const envLogin = process.env.AUTH_LOGIN?.toLowerCase().trim();

  if (
    !session?.user?.login ||
    session.user.login !== envLogin ||
    session.user.role !== "admin"
  ) {
    redirect("/admin-boza");
  }
  return (
    <div>
      <AddCaseForm />
    </div>
  );
}
