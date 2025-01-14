"use client";
import NavBar from "@/components/navBar";
import { useSession } from "next-auth/react";

export default function SiteLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const { data: session, status } = useSession();
    console.log("session:", session, status)
    return (
        <div>
          <NavBar />
          {children}
        </div>
      );
    }