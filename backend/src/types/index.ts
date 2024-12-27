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
    _id?: string;
    name?: string;
    description?: string;
    price?: number;
    stock?: number;
    image?: string[];
    categoryId?: string;
}

export interface IOrder{
    tableNumber: number,
    products: {
        productId: string,
        quantity: number
    }[],
    status: OrderStatus,
    userId?: string,
    area: AreaRole,
    createdAt: Date,
}