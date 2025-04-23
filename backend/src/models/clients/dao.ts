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
      async getClientsById(_id: string) {
        try {
          return await Clients.findById(_id)
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
      async updateClients(_id: string, clients: IClients) {
        try {
          const updatedClients = await Clients.findByIdAndUpdate(_id, clients, {
            new: true,
          });
          return updatedClients;
        } catch (error) {
          throw Error((error as Error).message);
        }
      }
      async deleteClients(_id: string) {
        try {
          const deletedClients = await Clients.findByIdAndDelete(_id);
          return deletedClients;
        } catch (error) {
          throw new Error((error as Error).message);
        }
      }
}

const clientsDao = new ClientsDao();

export default clientsDao