import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      login: string;
      role: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    login: string;
    role: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    login?: string;
    role?: string;
  }
}
