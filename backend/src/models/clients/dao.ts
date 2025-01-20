import Clients from "./model";
import { IClients } from "../../types";

class ClientsDao{
    async getClients() {
        try {
          return await Clients.find();
        } catch (error) {
          throw Error((error as Error).message);
        }
      }
      async getClientsById(id: string) {
        try {
          return await Clients.findById(id)
        } catch (error) {
          throw new Error((error as Error).message);
        }
      }
    async createClients(clients: { tableNumber: number }) {
        try {
          const newClients = await Clients.create(clients);
          return newClients;
        } catch (error) {
          throw new Error((error as Error).message);
        }
      }
      async updateClients(id: string, clients: IClients) {
        try {
          const updatedClients = await Clients.findByIdAndUpdate(id, clients, {
            new: true,
          });
          return updatedClients;
        } catch (error) {
          throw Error((error as Error).message);
        }
      }
      async deleteClients(id: string) {
        try {
          const deletedClients = await Clients.findByIdAndDelete(id);
          return deletedClients;
        } catch (error) {
          throw new Error((error as Error).message);
        }
      }
}

const clientsDao = new ClientsDao();

export default clientsDao