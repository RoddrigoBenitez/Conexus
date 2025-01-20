import mongoose, {Schema, Model} from "mongoose";
import { IOrder } from "../../types";

type OrderModel = Model<IOrder ,{}>

const OrderSchema: Schema<IOrder, OrderModel>= new Schema<IOrder, OrderModel>({
    tableNumber:{
        type: Number,
        required: false
    },
    products:[{
        productId:{
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: true
        },
        quantity: { 
            type: Number, 
            required: true 
        },
    }],
    status: { 
        type: String, 
        enum: ["pending", "preparing", "ready", "completed"], 
        default: "pending" 
    },
    userId: { 
        type: Schema.Types.ObjectId,
        ref: "User", 
        required: true 
    },
    area: { 
        type: String, 
        enum: ["cocina", "barra", "caja"], 
        required: true 
},
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
})

const Order: OrderModel = mongoose.model<IOrder, OrderModel>("Order", OrderSchema);

export default Order