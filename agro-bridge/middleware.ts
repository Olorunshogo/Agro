
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   const token = request.cookies.get("auth_token")?.value;
//   const isDashboardProtected = request.nextUrl.pathname.startsWith("/dashboard");

//   if (isDashboardProtected && !token) {
//     return NextResponse.redirect(new URL("/sign-in", request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: "/dashboard/:path*",
// };

// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token")?.value;
  const role = request.cookies.get("user_role")?.value;
  const pathname = request.nextUrl.pathname;

  // Protected routes
  const isAdminRoute = pathname.startsWith("/admin-dashboard");
  const isUserRoute = pathname.startsWith("/user-dashboard");
  const isAnyDashboard = isAdminRoute || isUserRoute;

  // 1. If user is NOT logged in → redirect to sign-in
  if (isAnyDashboard && !token) {
    const signInUrl = new URL("/signin", request.url);
    signInUrl.searchParams.set("callbackUrl", pathname); // optional: remember where they were
    return NextResponse.redirect(signInUrl);
  }

  // 2. If logged in but trying to access wrong dashboard
  if (token && isAnyDashboard) {
    // Admin trying to access user dashboard → redirect to admin
    if (role === "admin" && isUserRoute) {
      return NextResponse.redirect(new URL("/admin-dashboard", request.url));
    }

    // User trying to access admin dashboard → redirect to user
    if (role === "user" && isAdminRoute) {
      return NextResponse.redirect(new URL("/user-dashboard", request.url));
    }

    // Optional: if role is missing (corrupted session), force re-login
    if (!role) {
      request.cookies.delete("auth_token");
      request.cookies.delete("user_role");
      return NextResponse.redirect(new URL("/signin", request.url));
    }
  }

  // 3. Allow everything else (public pages, API, etc.)
  return NextResponse.next();
}

// Apply to both dashboards
export const config = {
  matcher: [
    "/admin-dashboard/:path*",
    "/user-dashboard/:path*",
  ],
};