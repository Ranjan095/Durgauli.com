/** @format */

import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  let { pathname } = request.nextUrl;
  //   let isPublicPath = pathname === "/login" || pathname === "/signup";

  let token = request.cookies.get("token")?.value || "";
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/admin/:path*",
};
