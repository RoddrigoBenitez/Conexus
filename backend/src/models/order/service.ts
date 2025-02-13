import orderDao from "./dao";
import { productDao } from "../products/dao";
import { IOrder, IOrderProduct } from "../../types";

const { createOrder, getOrderById, getOrdersByUserId, editOrder } = orderDao
const { editProduct, getProductById } = productDao;

class OrderService {
    async getOrdersByUserId(userId: string) {
      try {
        const orderHistory = await getOrdersByUserId(userId);
        return orderHistory;
      } catch (error) {
        throw Error((error as Error).message);
      }
    }
  
    async getOrderById(_id: string) {
      try {
        const order = await getOrderById(_id);
        return order;
      } catch (error) {
        throw Error((error as Error).message);
      }
    }
  
    async createOrder(order: IOrder) {
      const { products } = order;
      try {
        const newOrder = await createOrder(order);
  
        products.forEach(async (product: IOrderProduct) => {
          const productData = await getProductById(product.product_id);
          if (!productData) {
            throw Error("Product not found");
          }
          await editProduct(product.product_id!, {
            stock: productData.stock! - product.quantity!,
          });
        });
  
        return newOrder;
      } catch (error) {
        throw Error((error as Error).message);
      }
    }

    async editOrder(orderId: string, updateData: Partial<IOrder>) {
        try {
          const order = await getOrderById(orderId);
          if (!order) throw new Error("Order not found");
      
          //  si es necesario validaciones adicionales se lo hace aca
          const updatedOrder = await editOrder(orderId, updateData);
      
          // Aqui se emite un evento WebSocket
          // ejemplo
          // socket.emit("orderUpdated", updatedOrder);
      
          return updatedOrder;
        } catch (error) {
          throw new Error((error as Error).message);
        }
    }
}  

const orderService = new OrderService();

export default orderService;