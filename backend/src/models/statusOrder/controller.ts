import { Request, Response } from "express";
import { statusOrderService } from "./service";

const { createStatusOrder, getStatusOrder, getStatusOrderById, editStatusOrder, deleteStatusOrder } = statusOrderService

class StatusOrderController{
    // 1. Crear (POST)
async createStatusOrder(req: Request, res: Response){
    try {
        const statusOrder = await createStatusOrder(req.body);

        res.status(201).json({ message: "StatusOrder created successfully", statusOrder: { ...statusOrder.toObject() } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// 2. Obtener todos (GET)
//router.get("/", )
    async getStatusOrder(req: Request, res: Response) {
    try {
        const statusOrders = await getStatusOrder();
        res.status(200).json(statusOrders.map(statusOrder => ({ ...statusOrder.toObject() })));
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// 3. Obtener por ID (GET)
//router.get("/:id",)
 async getStatusOrderById (req: Request, res: Response){
    const { _id } = req.params;
    try {
        const statusOrder = await getStatusOrderById(_id);

        if (!statusOrder) {
            return res.status(404).json({ message: "StatusOrder not found" });
        }

        res.status(200).json({ ...statusOrder.toObject() });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// 4. Actualizar por ID (PUT)
//router.put("/:id",)
 async editStatusOrder(req: Request, res: Response) {
    try {
        const statusOrder = await editStatusOrder(req.params._id, req.body)
        res.status(200).json({ message: "StatusOrder updated successfully", statusOrder: { ...statusOrder?.toObject() }});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// 5. Eliminar por ID (DELETE)
//router.delete("/:id",) 
async deleteStatusOrder(req: Request, res: Response) {
    try {
        const statusOrder = await deleteStatusOrder(req.params._id);
        // Responder con un mensaje de éxito
        res.status(200).json({ message: "StatusOrder deleted successfully" , statusOrder});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};
}

export const statusOrderController = new StatusOrderController();