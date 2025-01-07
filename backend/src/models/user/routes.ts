import express  from "express";
import { userController } from "./controller";

const userRouter = express.Router();

const { createUser, getUsers, getUserById, editUser, deleteUser } = userController

userRouter.get("/", getUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/newUser", createUser);
userRouter.delete("/deleteUser/:id", deleteUser);
userRouter.put("/editUser/:id", editUser);

export default userRouter