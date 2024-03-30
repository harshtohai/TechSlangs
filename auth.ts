import NextAuth from "next-auth"
import authConfig from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";

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
      console.log(token)
      token.userId = token.sub
      return token;
    },
    async session({session,token}) {
      
      if (token.sub && session.user){
        session.user.id = token.sub
      }
      return session
    
    },
  },


 ...authConfig
})

