'use client'
import { useSession } from "next-auth/react";
import PageProduct from "./ProductPage";


export default function PageHome(){
    //const { data: session, status } = useSession();
    return(
        <PageProduct />
    )
}