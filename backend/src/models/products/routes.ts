import express  from "express"; 
import { productController } from "./controller";

const productRouter = express.Router();

const  { createProduct, getProduct, deleteProduct, editProduct } = productController

productRouter.get("/:id", getProduct)
productRouter.post("/newProduct", createProduct)
productRouter.put("/editProduct/:id", editProduct)
productRouter.delete("deleteProduct/:id", deleteProduct)

export default productRouter