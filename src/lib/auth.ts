import NextAuth, { NextAuthConfig } from "next-auth"
import GoogleProvider from "@auth/core/providers/google"

export const {
    handlers: { GET, POST },
    auth,
} = NextAuth({
    providers: [GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        allowDangerousEmailAccountLinking: true,
    })],
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: "/backstage/login"
    }
} satisfies NextAuthConfig)