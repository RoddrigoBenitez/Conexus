import { IStatusOrder } from "../../types";
import StatusOrder from "./model";

class StatusOrderDao {
    async createStatusOrder(statusOrder: IStatusOrder){
        try {
            const newStatusOrder = await StatusOrder.create(statusOrder)
            return newStatusOrder
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    async getStatusOrder(){
        try {
            const statusOrder = await StatusOrder.find();
            return statusOrder;
          } catch (error) {
            throw Error((error as Error).message);
          }
    }
    async getStatusOrderById(statusOrderId: string){
        try {
            const statusOrder = await StatusOrder.findById(statusOrderId);
            return statusOrder;
          } catch (error) {
            throw Error((error as Error).message);
          }
    }
    async editStatusOrder(statusOrderId: string, statusOrder: IStatusOrder){
        try {
            const updatedStatusOrder = await StatusOrder.findByIdAndUpdate(statusOrderId, statusOrder, {
            new: true,
            })            
            return updatedStatusOrder
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    async deleteStatusOrder(statusOrderId: string){
        try {
            const deletedStatusOrder = await StatusOrder.findByIdAndDelete(statusOrderId)
            return deletedStatusOrder
            
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
}

export const statusOrderDao = new StatusOrderDao()