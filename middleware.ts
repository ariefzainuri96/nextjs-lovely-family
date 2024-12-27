import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const publicRoutes = ["/login", "/register"];

    const currentUser = cookies().get("currentUser")?.value;
    const isInPublicRoutes = publicRoutes.includes(pathname);

    // const requestHeaders = new Headers(request.headers);
    // requestHeaders.set("x-url", request.url);

    if (!currentUser && !isInPublicRoutes) {
        const response = NextResponse.redirect(new URL("/login", request.url));
        return response;
    }

    if (currentUser && isInPublicRoutes) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
