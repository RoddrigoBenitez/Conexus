export type UserRole = "caja" | "mesero" | "cocina"

export interface IUser {
    username: string;
    password: string;
    rol: UserRole;
    createdAt?: Date;
}