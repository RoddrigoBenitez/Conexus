import { IStatusOrder } from "../../types";
import { statusOrderDao } from "./dao";

const { createStatusOrder, getStatusOrder, getStatusOrderById, editStatusOrder, deleteStatusOrder } = statusOrderDao

class StatusOrderService{
    async createStatusOrder(statusOrder: IStatusOrder){
        try {
            const newStatusOrder = await createStatusOrder(statusOrder)
            return newStatusOrder
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    async getStatusOrder(){
        try {
            const statusOrder = await getStatusOrder();
            return statusOrder;
          } catch (error) {
            throw Error((error as Error).message);
          }
    }
    async getStatusOrderById(statusOrderId: string){
        try {
            const statusOrder = await getStatusOrderById(statusOrderId);
            return statusOrder;
          } catch (error) {
            throw Error((error as Error).message);
          }
    }
    async editStatusOrder(statusOrderId: string, statusOrder:IStatusOrder){
        try {
            const updatedStatusOrder = await editStatusOrder(statusOrderId, statusOrder)
            return updatedStatusOrder
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    async deleteStatusOrder(statusOrderId: string){
        try {
            const deletedStatusOrder = await deleteStatusOrder(statusOrderId)
            return deletedStatusOrder
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
}

export const statusOrderService = new StatusOrderService()