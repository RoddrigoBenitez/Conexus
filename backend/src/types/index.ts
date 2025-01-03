import { Date } from "mongoose";

export type UserRole = "caja" | "mesero" | "cocina"

export type AreaRole = "caja" | "barra" | "cocina"

export type OrderStatus = "pending" | "preparing" | "ready" | "completed"

export interface IUser {
    username: string;
    password: string;
    rol: UserRole;
    createdAt?: Date;
}

export interface IProduct{
    name?: string;
    description?: string;
    price?: number;
    stock?: number;
    image?: string[];
    categoryId?: string;
}

export interface IOrder{
    tableNumber: number,
    products: IOrderProduct[],
    status: OrderStatus,
    userId?: string,
    area: AreaRole,
    createdAt: Date,
}

export interface IOrderProduct {
    product_id: string
    quantity: number
    sub_total: number
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