import Order from "./model";
import { IOrder } from "../../types";

class OrderDao {
    async getOrdersByUserId(userId: string) {
      try {
        const orderHistory = await Order.find({ user_id: userId });
        return orderHistory;
      } catch (error) {
        throw Error((error as Error).message);
      }
    }
  
    async createOrder(order: IOrder) {
      try {
        const newOrder = await Order.create(order);
        return newOrder;
      } catch (error) {
        throw Error((error as Error).message);
      }
    }
  
    async getOrderById(_id: string) {
      try {
        const order = await Order.findById(_id);
        return order;
      } catch (error) {
        throw Error((error as Error).message);
      }
    }

    async editOrder(orderId: string, updateData: Partial<IOrder>) {
        try {
          const updatedOrder = await Order.findByIdAndUpdate(orderId, updateData, { new: true });
          return updatedOrder;
        } catch (error) {
          throw new Error((error as Error).message);
        }
    }
}
  
const orderDao = new OrderDao();
  
export default orderDao;