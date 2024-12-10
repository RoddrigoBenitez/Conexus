import { IUser } from "../../types";
import { userDao } from "./dao";

const { createUser, getUsers, getUserById, editUser, deleteUser } = userDao

class UserService{
    async createUser(user: IUser){
        try {
            const newUser = await createUser(user)
            return newUser
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    async getUsers(){
        try {
            const users = await getUsers();
            return users;
          } catch (error) {
            throw Error((error as Error).message);
          }
    }
    async getUserById(userId: string){
        try {
            const user = await getUserById(userId);
            return user;
          } catch (error) {
            throw Error((error as Error).message);
          }
    }
    async editUser(userId: string, user:IUser){
        try {
            const updatedUser = await editUser(userId, user)
            return updatedUser
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    async deleteUser(userId: string){
        try {
            const deletedUser = await deleteUser(userId)
            return deletedUser
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
}

export const userService = new UserService()