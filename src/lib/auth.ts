import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"

import { db } from "@/lib/db"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db as any),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth",
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
     clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ token, session}) {
      if (token) {
        session.user.id = token.id
        session.user.name = token.name
        session.user.email = token.email
      }

      return session
   },
    async jwt({ token, user }) {
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email,
        },
      })

      if (!dbUser) {
        if (user) {
          token.id = user?.id
        }
        return token
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
      }
    },
  },
}
