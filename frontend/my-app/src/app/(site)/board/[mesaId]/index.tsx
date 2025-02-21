// 'use client'
// import React, { useState, useEffect } from "react";


// async function fetchTableById(id: string) {
//     try {
//       const response = await fetch(`${process.env.API_URL}/board/${id}`);
//       const data = await response.json();
  
//       return data;
//     } catch (error) {
//       console.error("Error fetching Table's:", error);
//       return null;
//     }
//   }

// export default function Page({ params }: { params: { id: string } }) {
//     const { id } = params;
//     const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);


//     return(
//         <div>
//             {id}
//         </div>
//     )
// }