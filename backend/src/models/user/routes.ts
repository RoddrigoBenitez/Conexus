import express  from "express";
import { userController } from "./controller";

const userRouter = express.Router();

const { createUser, getUsers, getUserById, editUser, deleteUser } = userController

userRouter.get("/", getUsers);
userRouter.get("/:id", getUserById);
userRouter.delete("/deleteUser/:id", deleteUser);
userRouter.put("/editUser/:id", editUser);

// Futura funcion de roles
//userRouter.put("/changeRole/:id", , changeRole);


export default userRouter