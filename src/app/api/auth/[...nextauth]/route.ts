import NextAuth, { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Credentials({
      id: "admin-login",
      name: "Admin login",
      credentials: {
        login: { label: "Login", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const login = credentials?.login;
        const password = credentials?.password;

        const envLogin = process.env.AUTH_LOGIN?.toLowerCase().trim();
        const envPass = process.env.AUTH_PASSWORD?.trim();

        if (!login || !password || !envLogin || !envPass) return null;

        if (login === envLogin && password === envPass) {
          return {
            id: "main-admin",
            login: envLogin,
            role: "admin",
          };
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.login = (user as { login?: string }).login;
        token.role = (user as { role?: string }).role ?? "admin";
      }

      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.login = token.login as string;
        session.user.role = token.role as string;
      }

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
