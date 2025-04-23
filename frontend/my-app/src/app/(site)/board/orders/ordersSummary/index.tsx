'use client'

export default function OrdersBoard(){


    // const calculateTotalAmount = () => {
    //     return order.reduce((total, item) => total + item.price * item.quantity, 0);
    // };


    return(
        <div className="p-4 w-[1200]  bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Mesas y Ordenes:</h2>
        {/* {order.length > 0 ? (
            <div className="w-[900px] space-y-4">
                {order.map((item) => (
                    <div
                        key={item.id}
                        className="flex  items-center border-b border-gray-200 py-4"
                    >
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <div className="flex items-center mt-2">
                                <button
                                    className="px-2 py-1 bg-gray-200 text-gray-700 rounded"
                                    //onClick={() => substractOneFromOrders(item)}
                                >
                                    -
                                </button>
                                <span className="px-4">{item.quantity}</span>
                                <button
                                    className="px-2 py-1 bg-gray-200 text-gray-700 rounded"
                                   // onClick={() => addToOrders({ ...item, quantity: 1 })}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col items-end">
                            <p className="text-lg font-semibold">${item.price * item.quantity}</p>
                            <button
                                className="text-red-500 text-sm mt-1"
                                // onClick={() => removeFromOrders(item.id)}
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                ))}
                <div className="flex justify-between items-center border-t border-gray-300 pt-4 mt-4">
                    <h3 className="text-xl font-bold">Monto Total:</h3>
                    {/* <p className="text-xl font-bold">${calculateTotalAmount()}</p> */}
                {/* </div>
                <div className="flex justify-start">
                    <button
                        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        //onClick={clearOrders}
                    >
                        Cerrar Ordenes
                    </button>
                </div>
            </div>
        ) : ( */} 
            <p className="text-center text-gray-500">No hay Ordenes.</p>
        {/* )} */}
    </div>    )
}