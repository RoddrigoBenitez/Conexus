'use client'
import { useEffect, useState } from "react";
import { ITable } from "@/types"
import { Button, Card } from "flowbite-react";


export default function PageBoard(){
    const [tables, setTables] = useState<ITable[] >([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() =>{
        const fetchTables = async ()=> {
            try {
                const url = `${process.env.NEXT_PUBLIC_API_URL}/clients/`
                const result = await fetch(url)
                if (!result.ok) throw new Error("Error fetching Tables");

                const data = await result.json();
                // const formData = data.map((items: any) => ({
                //     _id: items._id,
                //     name: items.name as String,
                // })


                setTables(data);
            } catch (error) {
                console.error("Error fetching Tables:", error);
                setError("Error fetching Tables");
              } finally {
                setLoading(false);
              }
            };
        fetchTables();

    }, [])
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return(
        <div className="flex flex-wrap p-4">
            {tables.map((table) => (
                <Card
                key={table._id}
                className="w-[220px] h-[200px] flex flex-col justify-between items-center p-4 shadow-lg border border-gray-200"
                >
                <span className="text-4xl font-bold text-blue-600 border border-gray-300 w-[120px] h-[120px] flex items-center justify-center m-4">
                    {table.tableNumber}
                </span>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold">
                    Details
                </Button>
                </Card>
            ))}
        </div>
    )

}