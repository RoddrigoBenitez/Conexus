import express, { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";

const router = express.Router();

// 1. Crear un usuario (POST)
router.post("/", async (req: Request, res: Response) => {
    const { username, password, rol } = req.body;

    try {
        // Verificar si el usuario ya existe
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Crear nuevo usuario
        const newUser = new User({ username, password, rol });

        // Guardar el nuevo usuario en la base de datos
        await newUser.save();

        // Responder con el usuario creado (sin la contraseña)
        res.status(201).json({ message: "User created successfully", user: { ...newUser.toObject(), password: undefined } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// 2. Obtener todos los usuarios (GET)
router.get("/", async (req: Request, res: Response) => {
    try {
        const users = await User.find();

        // Responder con la lista de usuarios (sin las contraseñas)
        res.status(200).json(users.map(user => ({ ...user.toObject(), password: undefined })));
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// 3. Obtener un usuario por ID (GET)
router.get("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Responder con el usuario (sin la contraseña)
        res.status(200).json({ ...user.toObject(), password: undefined });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// 4. Actualizar un usuario por ID (PUT)
router.put("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    const { username, password, rol } = req.body;

    try {
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Actualizar los campos del usuario
        user.username = username || user.username;
        user.rol = rol || user.rol;

        if (password) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
        }

        // Guardar el usuario actualizado
        await user.save();

        // Responder con el usuario actualizado (sin la contraseña)
        res.status(200).json({ message: "User updated successfully", user: { ...user.toObject(), password: undefined } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// 5. Eliminar un usuario por ID (DELETE)
router.delete("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Eliminar el usuario con deleteOne en lugar de remove
        await User.deleteOne({ _id: id });

        // Responder con un mensaje de éxito
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

export default router;
