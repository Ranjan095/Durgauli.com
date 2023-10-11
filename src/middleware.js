/** @format */

import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  let { pathname } = request.nextUrl;
  let isPublicPath = pathname == "/login";

  let token = request.cookies.get("token")?.value || "";
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/admin", request.nextUrl));
  }

  // Return NextResponse.next() to continue the request
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/admin/:path*"],
};
