import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Cases } from "@/Components/AdminComponents/Cases/Cases";
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
      <Cases />
    </div>
  );
}
