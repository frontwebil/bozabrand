import { getServerSession } from "next-auth";
import { LoginForm } from "../../Components/AdminComponents/LoginForm/LoginForm";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function AdminLoginPage() {
  const session = await getServerSession(authOptions);
  const envLogin = process.env.AUTH_LOGIN?.toLowerCase().trim();

  if (
    session?.user?.login &&
    session.user.login === envLogin &&
    session.user.role === "admin"
  ) {
    redirect("/admin-boza/cases");
  }

  return (
    <div>
      <LoginForm />
    </div>
  );
}
