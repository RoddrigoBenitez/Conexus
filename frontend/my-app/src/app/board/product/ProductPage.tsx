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
        <div className="flex flex-wrap justify-center items-stretch w-[1200] p-4 m-4">
            {products.map((product)=>(

            <Card className="max-w-[300px] flex justify-center items-center p-4 m-4"
            key={product._id}
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {product.name}    
                </h5>
                <h6>
                    {product.description}
                </h6>
                <span>
                    <p>{product.price}</p>
                </span>
                <Button>
                    Details
                </Button>
            </Card>
            ))}
        </div>
    )
}