'use client'

import { Avatar, Dropdown, Navbar, Button } from "flowbite-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { logOut } from "@/src/app/actions/authActions";

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
    <Navbar fluid rounded >
      <Navbar.Brand href="#">
        <img
          src=""
          className="mr-3 sm:h-9 w-[25] h-[25]"
          alt="App Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Logs-Manager 
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {session?.user ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
                <Button>{session.user.username}</Button>
                

            }
          >
            <Dropdown.Header>
            <Dropdown.Item onClick={handleLogOut}>Log Out</Dropdown.Item>
            </Dropdown.Header>
            {/* <span className="block truncate text-sm font-medium">
                {session.user.role}
              </span> */}
          </Dropdown>
        ) : (
          <button
            className="text-sm text-gray-700 dark:text-white"
            onClick={() => router.push("/")}
          >
            Login
          </button>
        )}
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}