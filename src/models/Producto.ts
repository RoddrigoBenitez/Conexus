import mongoose, { Schema, Document, Model } from "mongoose";

// Interfaz para el documento
interface IProducto extends Document {
    name: string;
    price: number;
    stock: number;
    createdAt: Date;
}

// Esquema
const ProductoSchema: Schema = new Schema<IProducto>({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
});

// Modelo
const Producto: Model<IProducto> = mongoose.model<IProducto>("Producto", ProductoSchema);

export default Producto;
