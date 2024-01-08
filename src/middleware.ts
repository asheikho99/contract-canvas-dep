import { auth } from "@/lib/auth"
import { NextResponse } from "next/server";

export default auth((req) => {
    const { pathname } = req.nextUrl;

    const isAuth = req.auth;
    const isAuthPage = pathname.startsWith('/backstage/login')

    if (isAuthPage) {
        if (isAuth) {
            return NextResponse.redirect(new URL('/backstage/dashboard', req.url))
        }

        return null
    }

    if (!isAuth) {
        let from = req.nextUrl.pathname;
        if (req.nextUrl.search) {
            from += req.nextUrl.search;
        }
        return NextResponse.redirect(new URL(`/backstage/login?from=${encodeURIComponent(from)}`, req.url))
    }
})

export const config = {
    matcher: ["/backstage/:path*"],
}