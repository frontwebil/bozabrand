import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

type UserLike = {
  login?: string | null;
  role?: string | null;
};

export function isAdminUser(user?: UserLike | null) {
  const envLogin = process.env.AUTH_LOGIN?.toLowerCase().trim();
  const login = user?.login?.toLowerCase().trim();

  return Boolean(login && envLogin && login === envLogin && user?.role === "admin");
}

export async function requireAdminSessionOrRedirect(loginPath = "/admin-boza") {
  const session = await getServerSession(authOptions);

  if (!isAdminUser(session?.user)) {
    redirect(loginPath);
  }

  return session;
}
