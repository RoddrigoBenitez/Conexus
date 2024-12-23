export type UserRole = "caja" | "mesero" | "cocina"

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