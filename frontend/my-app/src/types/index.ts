export interface ITable{
    _id: string
    tableNumber: number
}
export interface IProducts{
    _id: string;
    name: string;
    price: number;
    category?: string;
    description: string;
    image: string[];
    quantity: number;
}