import express  from "express";
import clientsController  from "./controller"

const { createClients, getClients, getClientsById, updateClients, deleteClients} = clientsController

const clientsRouter = express.Router()

clientsRouter.get("/", getClients);
clientsRouter.get("/:id", getClientsById);
clientsRouter.post("/newClients", createClients);
clientsRouter.delete("/deleteClients/:id", deleteClients);
clientsRouter.put("/editClients/:id", updateClients);

export default clientsRouter