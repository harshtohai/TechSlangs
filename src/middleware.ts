import NextAuth from "next-auth"
import { NextResponse } from "next/server";
import authConfig from '../auth.config'

const {auth}:any = NextAuth(authConfig)

export default auth((req:any) => {
  
  const isLoggedIn = !!req.auth;
  const isAuthPage = req.nextUrl.pathname.startsWith("/auth")
  const isProtectedPage = req.nextUrl.pathname.startsWith("/profile") || req.nextUrl.pathname.startsWith("/new-word")

  if (isAuthPage) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL("/", req.url))
    }
    return null
  }

  if (isProtectedPage) {
    if (isLoggedIn) { 
      return null
    }
    return NextResponse.redirect(new URL('/auth', req.url))
  }
  return null
})

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)","/","/(api|trpc)(.*)"],
}
