'use client'
import LoginForm from "@/components/login/login-form";
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800">
      <LoginForm />
    </main>
  );
}
