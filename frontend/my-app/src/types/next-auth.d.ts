import NextAuth from "next-auth";

  declare module "next-auth" {
    interface Session extends DefaultSession {
      user: {
        userId: string;
        username: string;
        rol: string;
      } & DefaultSession["user"];
    }
  
    interface User extends DefaultUser {
      id: string;
      rol: string;
      username: string;
    }
  }
  
  declare module "next-auth/jwt" {
    interface JWT {
      id: string;
      username: string;
      role: string;
    }
  }
