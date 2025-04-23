'use server'

import { signOut } from "../../../auth";

// export async function logOut() {
//   await signOut();
// }

import { signIn } from "../../../auth";

export async function getUserByUserName(username: string) {
  try {
    const result = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/user?username=${username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(result)
    const data = await result.json();
    console.log(data)
    return {
      userId: data._id,
      rol: data.rol,
      username: data.username,
    };
  } catch (error) {
    console.error(error);
  }
}

export async function login(credentials: { username: string; password: string }) {
    try {
        const result = await signIn("credentials", {
          username: credentials.username,
          password: credentials.password,
          redirect: false, // Evita redireccion
        });
    
        if (!result?.ok) {
          throw new Error("Authentication failed");
        }
    
        return result;
      } catch (error) {
        console.error("Login error:", error);
        throw error;
      }
    }



export async function formLogin(formData: FormData) {
  //const parsedUsername = username.toLowerCase();
  const username = formData.get("username") as string;
  const password = formData.get("password");

  try {
    const result =  {
      username: username,
      password: password as string,
    }
    return result;
  } catch (error) {
    console.log("actions error", error);
    throw new Error((error as Error).message);
  }
}

export async function logOut() {
    try {
      await signOut({ redirect: false }); 
    } catch (error) {
      console.error("Logout error:", error);
    }
  }



// 'use client'

// import { signIn, signOut } from "next-auth/react";

// export async function login(credentials: { username: string; password: string }) {
//   try {
//     const result = await signIn("credentials", {
//       username: credentials.username,
//       password: credentials.password,
//       redirect: false, // Evita redireccion
//     });

//     if (!result?.ok) {
//       throw new Error("Authentication failed");
//     }

//     return result;
//   } catch (error) {
//     console.error("Login error:", error);
//     throw error;
//   }
// }

// export async function logOut() {
//   try {
//     await signOut({ redirect: false }); 
//   } catch (error) {
//     console.error("Logout error:", error);
//   }
// }