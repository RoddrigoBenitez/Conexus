'use client'
import { signIn } from "next-auth/react";
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { RiEyeLine, RiLoginBoxLine } from "react-icons/ri";
import { AiOutlineUser, AiOutlineLoading3Quarters } from "react-icons/ai";
import { Spinner } from "flowbite-react";
import { formLogin } from "@/app/actions/authActions";



export default function LoginForm() {
    const [viewPassword, setViewPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    setLoading(true);
    setError(null);

    try {
        const result = await signIn("credentials", {
            username,
            password,
            redirect: false,
        });

        if (!result?.ok) {
            throw new Error("Credenciales inválidas");
        }

        router.push("/product");
    } catch (error) {
        setError((error as Error).message || "Error al autenticar");
        setLoading(false);
    }
}


  

    return(
        <div className="w-[400px] bg-gray-50 rounded-md shadow-md px-12 py-8 flex flex-col items-center border border-gray-300">
            <h3 className="text-xl font font-semibold text-black">Login</h3>
            <h4 className="text-sm font-light mt-2 text-black">Accede a tu cuenta</h4>
            <form onSubmit={handleSubmit} className="mt-4 w-full">
              <div className="flex flex-col mt-2">
              <div className="border border-gray-300 p-2 rounded-md bg-gray-100 flex gap-2 items-center">
             <AiOutlineUser className="w-5 h-5 text-gray-600" />
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your User"
                  className=" focus:outline-none bg-gray-100 text-black text-xs placeholder:text-xs"
                />
        </div>
          
        <div className="border border-gray-300 p-2 rounded-md bg-gray-100 flex gap-2 items-center justify-between mt-6">
            <div className="flex items-center gap-2">
              {/* <IconLock className="w-5 h-5 text-gray-600" /> */}
              <input
                type={viewPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="focus:outline-none bg-gray-100 text-black text-xs placeholder:text-xs"
              />
            </div>
            <RiEyeLine
              className="w-4 h-4 cursor-pointer text-gray-600"
              onClick={() => setViewPassword(!viewPassword)}
            />
          </div>
          <p className=" text-right text-red-500 text-xs mt-1 cursor-pointer">
            Forgot password?
          </p>

          <button
            type="submit"
            className="bg-neutral-700 text-white font-semibold p-2 rounded-md mt-6 hover:bg-neutral-500 flex items-center justify-center h-10"
          >
            {loading ? (
              <Spinner className="h-5 w-5 animate-spin" />
            ) : (
              "Login"
            )}
          </button>
          {error && <p className="text-red-500 text-xs mt-2 w-full text-center">{error}</p>}
        </div>
            </form>
    </div>
  )
}