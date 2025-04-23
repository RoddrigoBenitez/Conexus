import mongoose, {Schema, Model} from "mongoose";
import { IOrder } from "../../types";

type OrderModel = Model<IOrder ,{}>

const OrderSchema: Schema<IOrder, OrderModel>= new Schema<IOrder, OrderModel>({
    user_id: { 
        type: Schema.Types.ObjectId,
        ref: "User", 
        required: true 
    },
    products:[{
        product_id:{
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: true
        },
        quantity: { 
            type: Number, 
            required: true 
        },
    }],
    clients_id: { 
        type: Schema.Types.ObjectId,
        ref: "Clients", 
        required: true 
    },
    status_id: { 
        type: Schema.Types.ObjectId,
        ref: "Clients", 
        required: true 
    },
//     area: { 
//         type: String, 
//         enum: ["cocina", "barra", "caja"], 
//         required: true 
// },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
})

const Order: OrderModel = mongoose.model<IOrder, OrderModel>("Order", OrderSchema);

export default Order