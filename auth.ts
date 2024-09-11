import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { db } from "./lib/db"; // Assuming this is your Prisma client
import { pages } from "next/dist/build/templates/app-page";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      authorize: async (credentials) => {
        const email = credentials.email as string | undefined;
        const password = credentials.password as string | undefined;

        if (!email || !password) {
          throw new CredentialsSignin("Please provide both email & password");
        }

        const user = await db.user.findUnique({ where: { email } });
        if (!user) {
          throw new Error("Invalid email or password");
        }

        const isMatched = await bcrypt.compare(password, user.hashPassword);
        if (!isMatched) {
          throw new Error("Password did not matched");
        }

        const userData = {
          name: user.username,
          email: user.email,
          role: user.role,
          id: user.id,
        };

        return userData;
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  session:{
    strategy: "jwt"
  },
  callbacks: {
    async session({ session, token }) {
      if (token?.sub && token?.role) {
        session.user.id = token.sub;
        session.user.role = token.role;
      }
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
  },

  signIn: async ({ user, account }) => {
      if (account?.provider === "credentials") {
        return true;
      } else {
        return false;
      }
    },

});
