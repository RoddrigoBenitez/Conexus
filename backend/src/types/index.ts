import { Date } from "mongoose";

export type UserRole = "caja" | "mesero" | "cocina"

export type AreaRole = "caja" | "barra" | "cocina"

export type OrderStatus = "pending" | "preparing" | "ready" | "completed"

export interface IUser {
    username: string;
    password: string;
    rol: UserRole;
    createdAt: Date;
}

export interface IProduct{
    name?: string;
    description?: string;
    price?: number;
    stock?: number;
    image?: string[];
    category_id?: string;
    subCategory_id?: string;
}

export interface IOrder{
    user_id?: string,
    products: IOrderProduct[],
    clients_id?: string,
    status_id?: string,
    //area: AreaRole,
    createdAt: Date,
}

export interface IOrderProduct {
    product_id: string
    quantity: number
    //sub_total: number
}

export interface ICategory{
    name: string,
    subCategories?: { id: string }[]
}

export interface ISubCategory{
    name: string
}

export interface IClients{
    tableNumber: number,
    createdAt: Date
}

export interface IStatusOrder{
    status: OrderStatus,
    createdAt: Date
}