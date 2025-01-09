import NextAuth, { AuthError } from "next-auth";
import { getUserById, login } from "@/src/app/actions/authActions";
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
          const response = await login({ username, password });
          if (response.error) {
            throw new Error(response.error);
          }
          if (response.username) {
            const user = await getUserById(username);
            if (user) {
              return {
                id: user.userId,
                username: user.username,
                role: user.role,
              };
            }
          }
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
        token.role = user.role as string;
        token.username = user.username as string;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.userId = token.id as string;
      session.user.role = token.role as string;
      session.user.username = token.username as string;

      return session;
    },
  },
})