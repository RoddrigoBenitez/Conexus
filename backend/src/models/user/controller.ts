import { Request, Response } from "express";
import { userService } from "./service";
import bcrypt from "bcrypt";

const { createUser, getUsers, getUserById, editUser, deleteUser } = userService

class UserController{
    // 1. Crear un usuario (POST)
async createUser(req: Request, res: Response){
    try {
        // Verificar si el usuario ya existe
        const user = await createUser(req.body);

        // Responder con el usuario creado (sin la contraseña)
        res.status(201).json({ message: "User created successfully", user: { ...user.toObject(), password: undefined } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// 2. Obtener todos los usuarios (GET)
//router.get("/", )
    async getUsers(req: Request, res: Response) {
    try {
        const users = await getUsers();
        // Responder con la lista de usuarios (sin las contraseñas)
        res.status(200).json(users.map(user => ({ ...user.toObject(), password: undefined })));
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// 3. Obtener un usuario por ID (GET)
//router.get("/:id",)
 async getUserById (req: Request, res: Response){
    const { id } = req.params;
    try {
        const user = await getUserById(id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Responder con el usuario (sin la contraseña)
        res.status(200).json({ ...user.toObject(), password: undefined });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// 4. Actualizar un usuario por ID (PUT)
//router.put("/:id",)
 async editUser(req: Request, res: Response) {
    try {
        const user = await editUser(req.params.id, req.body)
        // Responder con el usuario actualizado (sin la contraseña)
        res.status(200).json({ message: "User updated successfully", user: { ...user?.toObject(), password: undefined } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// 5. Eliminar un usuario por ID (DELETE)
//router.delete("/:id",) 
async deleteUser(req: Request, res: Response) {
    try {
        const user = await deleteUser(req.params.id);
        // Responder con un mensaje de éxito
        res.status(200).json({ message: "User deleted successfully" , user});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};
}

export const userController = new UserController();




