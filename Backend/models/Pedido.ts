import mongoose, { Schema, Document, Model } from "mongoose";

// Interfaz para Producto en el Pedido
interface IProductoPedido {
    productoId: mongoose.Schema.Types.ObjectId; // ID del producto
    nombre: string; // Nombre del producto (opcional, para historial)
    cantidad: number; // Cantidad del producto
    precio: number; // Precio por unidad
}

// Interfaz para el Pedido
interface IPedido extends Document {
    user: mongoose.Schema.Types.ObjectId; // Referencia al usuario
    productos: IProductoPedido[]; // Lista de productos
    total: number; // Total calculado del pedido
    estado: "pendiente" | "en_proceso" | "completado"; // Estado del pedido
    createdAt: Date;
    updatedAt: Date;
}

// Esquema para Pedido
const PedidoSchema: Schema = new Schema<IPedido>(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        productos: [
            {
                productoId: { type: mongoose.Schema.Types.ObjectId, ref: "Producto", required: true },
                nombre: { type: String, required: true },
                cantidad: { type: Number, required: true, min: 1 },
                precio: { type: Number, required: true, min: 0 },
            },
        ],
        total: { type: Number, required: true, default: 0 }, // Calculado antes de guardar
        estado: {
            type: String,
            enum: ["pendiente", "en_proceso", "completado"],
            default: "pendiente",
        },
    },
    { timestamps: true } 
);

PedidoSchema.pre<IPedido>("save", function (next) {
    this.total = this.productos.reduce((acc, item) => acc + item.cantidad * item.precio, 0);
    next();
});

// Modelo
const Pedido: Model<IPedido> = mongoose.model<IPedido>("Pedido", PedidoSchema);

export default Pedido;
