'use client'
import { useSession } from "next-auth/react";

export default function PageHome(){
    //const { data: session, status } = useSession();
    return(
        <h1>Hello User</h1>
    )
}