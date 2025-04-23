'use client'
import NavBar from "@/components/navBar";



export default function SiteLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <div>
            <NavBar />
            {children}
        </div>
      );
    }