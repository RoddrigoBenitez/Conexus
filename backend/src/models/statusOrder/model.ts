import mongoose, {Schema, Model} from "mongoose";
import { IStatusOrder } from "../../types";

type StatusOrderModel = Model<IStatusOrder, {}>

const statusOrderSchema: Schema<IStatusOrder,StatusOrderModel> = new Schema<IStatusOrder, StatusOrderModel>({
    status:{
        type: String,
        required: true,
        enum: ["pending", "preparing", "ready", "completed"],
        default: "pending"
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
})

const StatusOrder: StatusOrderModel = mongoose.model<IStatusOrder, StatusOrderModel>("StatusOrder", statusOrderSchema);

export default StatusOrder