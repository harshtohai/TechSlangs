import NextAuth from "next-auth"
import authConfig from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";
import {JWT} from '@auth/core/jwt'
import { Session } from "@auth/core/types";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(db),
  pages: {signIn: '/auth'},
  session: {strategy: "jwt"},
  callbacks:{
    async jwt({token}) {
      return token;
    },
    async session({session}) {
      // console.log({session})
      return session
    },
  },


 ...authConfig
})

