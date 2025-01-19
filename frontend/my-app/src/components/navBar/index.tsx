'use client'

import { Dropdown, Navbar } from "flowbite-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { logOut } from "@/app/actions/authActions";

export default function NavBar() {
  const { data: session } = useSession();
  const router = useRouter();

  async function handleLogOut() {
    try {
      await logOut();
      router.push("/");
    } catch (err) {
      console.error("Error during logout:", err);
    }
  }

  return (
    <Navbar fluid >
      <Navbar.Brand href="#">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white p-4">
        ConeXus
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 p-4">
        {session?.user ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
                <span>{session.user.username}</span>
            }
          >
            <Dropdown.Header>
            <Dropdown.Item onClick={handleLogOut}>Log Out</Dropdown.Item>
            </Dropdown.Header>
          </Dropdown>
        ) : (
          <button
            className="text-sm text-gray-700 dark:text-white"
            onClick={() => router.push("/")}
          >
            Login
          </button>
        )}

      </div>
    </Navbar>
  );
}