import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

export function middleware(request: NextRequest) {
  // Check if the path is /create
  if (request.nextUrl.pathname === "/create") {
    // Get the authentication token from the cookies
    const isAuthenticated = cookies().get("auth_token")?.value;

    if (!isAuthenticated) {
      // Redirect to login if not authenticated
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/create",
};
