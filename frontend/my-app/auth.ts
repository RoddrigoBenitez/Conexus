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
          const response = await fetch(`${process.env.API_URL}/user/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        console.log("auth response: ", response)
        if (!response.ok) {
            throw new Error("Credenciales inválidas");
        }

        const user = await response.json();

        console.log("auth user: ", user)

        if (!user) {throw new Error("User not found")};

        return {
            id: user.userId,
            username: user.username,
            rol: user.rol,
        };
        } catch (error) {
          throw new AuthError((error as AuthError).message);
        }
        return null;
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
      console.log("auth callback JWT user: ", user)
      return token;
    },
    async session({ session, token }) {
      session.user.userId = token.id as string;
      session.user.rol = token.rol as string;
      session.user.username = token.username as string;
      console.log("auth session: ", session)
      return session;
    },
  },
})