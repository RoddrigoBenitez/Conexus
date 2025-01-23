'use client'

export default function Page({ params }: { params: { id: string } }) {
    const { id } = params;

    // async function fetchProductById(id: string) {
    //     try {
    //       const response = await fetch(`${process.env.API_URL}/product/${id}`);
    //       const data = await response.json();
      
    //       return data;
    //     } catch (error) {
    //       console.error("Error fetching product:", error);
    //       return null;
    //     }
    //   }

    return(
        <div>
            {id}
        </div>
    )
}