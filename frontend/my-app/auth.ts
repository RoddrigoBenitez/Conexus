import NextAuth, { AuthError } from "next-auth";
import { getUserByUserName, login } from "@/app/actions/authActions";
import Credentials from "next-auth/providers/credentials";

 
export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  secret: process.env.JWT_SECRET,
  providers: [
    Credentials({
      async authorize(credentials) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/user/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            throw new Error("Credenciales inválidas");
        }

        const data = await response.json();
        return {
            id: data.userId,
            username: data.username,
            rol: data.rol,
        };
        } catch (error) {
          throw new AuthError((error as AuthError).message);
        }
        //return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id as string;
        token.rol = user.rol as string;
        token.username = user.username as string;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.userId = token.id as string;
      session.user.rol = token.rol as string;
      session.user.username = token.username as string;

      return session;
    },
  },
})