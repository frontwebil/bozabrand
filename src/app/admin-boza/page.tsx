import { getServerSession } from "next-auth";
import { LoginForm } from "../../Components/AdminComponents/LoginForm/LoginForm";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { isAdminUser } from "@/lib/adminAuth";
import { redirect } from "next/navigation";

export default async function AdminLoginPage() {
  const session = await getServerSession(authOptions);

  if (isAdminUser(session?.user)) {
    redirect("/admin-boza/cases");
  }

  return (
    <div>
      <LoginForm />
    </div>
  );
}
