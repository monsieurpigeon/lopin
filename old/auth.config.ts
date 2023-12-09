import { NextAuthConfig } from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },
  },
  providers: [
    FacebookProvider({
      clientId: "1030088261536171",
      clientSecret: "081fb831b3b97523c09768b9d94ed466",
    }),
  ],
} satisfies NextAuthConfig;
