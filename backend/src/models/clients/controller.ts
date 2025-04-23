import clientsService from "./service";
import { Request, Response } from "express";

const { createClients, getClients, getClientsById, updateClients, deleteClients } = clientsService

class ClientsController {
    async getClients(req: Request, res: Response) {
      try {
        const clients = await getClients();
        res.status(200).json(clients);
      } catch (error) {
        res.status(500).json({ error: (error as Error).message });
      }
    }

    async createClients(req: Request, res: Response) {
      try {
        const { tableNumber } = req.body;
        // // hace q funcione porq valida el nombre
        // if (!tableNumber) {
        //   return res.status(400).json({ error: "El campo 'name' es obligatorio." });
        // }
        const newClients = await createClients({ tableNumber });
        res.status(201).json(newClients);
      } catch (error) {
        res.status(500).json({ error: (error as Error).message });
      }
    }
    async getClientsById(req: Request, res: Response) {
      try {
        const { _id } = req.params;
        const getClients = await getClientsById(_id);
        res.status(200).json(getClients);
      } catch (error) {
        res.status(500).json({ error: (error as Error).message });
      }
    }
    async updateClients(req: Request, res: Response) {
      try {
        const { _id } = req.params;
        const { tableNumber } = req.body;
        const updatedClients = await updateClients(_id, tableNumber);
        res.status(200).json(updatedClients);
      } catch (error) {
        res.status(500).json({ error: (error as Error).message });
      }
    }
    async deleteClients(req: Request, res: Response) {
      try {
        const { _id } = req.params;
        const deletedClients = await deleteClients(_id);
        res.status(200).json(deletedClients);
      } catch (error) {
        res.status(500).json({ error: (error as Error).message });
      }
    }
  }
  
  const clientsController = new ClientsController();
  
  export default clientsController;