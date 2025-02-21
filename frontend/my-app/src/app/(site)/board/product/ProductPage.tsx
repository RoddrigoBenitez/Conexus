'use client'
import { Button, Card } from "flowbite-react";
import { IProducts } from "@/types";
import { useEffect, useState } from "react";

export default function PageProduct(){
    const [products, setProducts] = useState<IProducts[]>([])
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(()=>{
        const fetchProducts= async () =>{
            try {
                const url = `${process.env.NEXT_PUBLIC_API_URL}/product/`
                const response = await fetch(url)
                if (!response.ok) throw new Error("Error fetching Tables");
                const data = await response.json()
                setProducts(data)               
            } catch (error) {
                console.error("Error fetching Tables:", error);
                setError("Error fetching Tables");
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, 
[])
    if(loading) return<p>Loading...</p>
    if(error) return<p>{error}</p>


    return(
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-2xl">Menu</h1>
            {products.map((product)=>(

            <div className="flex justify-between rounded-md bg-blue-500 w-[600px] gap-4 p-4 m-4"
            key={product._id}
            >
                <div className="flex flex-col gap-4">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {product.name}    
                </h5>
                <h6 className="font-bold tracking-tight text-gray-900 dark:text-white ">
                    {product.description}
                </h6>
                <span className="flex justify-between">
                    <p className="dark:text-white">Total:</p>
                    <p className="dark:text-white font-bold">{product.price}</p>
                </span>
                </div>
                <Button>
                    Details
                </Button>
            </div>
            ))}
        </div>
    )
}