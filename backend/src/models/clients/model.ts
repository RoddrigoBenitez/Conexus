import mongoose, {Schema, Model} from "mongoose";
import { IClients } from "../../types";

type ClientsModel = Model<IClients, {}>

const clientsSchema: Schema<IClients, ClientsModel> = new Schema<IClients, ClientsModel>({
    tableNumber:{
        type: Number,
        require: true
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
})

const Clients: ClientsModel = mongoose.model<IClients, ClientsModel>("Clients", clientsSchema);

export default Clients