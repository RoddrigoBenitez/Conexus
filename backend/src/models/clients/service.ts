import { IClients } from "../../types";
import clientsDao from "./dao";

const { createClients, getClients, getClientsById, updateClients, deleteClients } = clientsDao

class ClientsSercice{
    async getClients() {
        try {
          const clients = await getClients()
          return clients;
        } catch (error) {
          throw new Error((error as Error).message);
        }
      }
      async getClientsById(id: string){
        try {
          const getClients = await getClientsById(id)
          return getClients
        } catch (error) {
            throw Error((error as Error).message);
        }
      }

    async createClients(clients: { tableNumber: number }) {
        try {
          const newClients = await createClients(clients);
          return newClients;
        } catch (error) {
          throw new Error((error as Error).message);
        }
      }
      async updateClients(id: string, clients: IClients) {
        try {
          const updatedClients = await updateClients(id, clients);
          return updatedClients;
        } catch (error) {
          throw Error((error as Error).message);
        }
      }

      async deleteClients(id: string) {
        try {
          const deletedClients = await deleteClients(id);
          return deletedClients;
        } catch (error) {
          throw new Error((error as Error).message);
        }
      }

}

const clientsService = new ClientsSercice()

export default clientsService