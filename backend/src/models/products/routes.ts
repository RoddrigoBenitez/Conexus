import express  from "express"; 
import { productController } from "./controller";
import upload from '../../middleware/multer';

const productRouter = express.Router();

const  { createProduct, getProduct, deleteProduct, editProduct } = productController

productRouter.get("/:id", getProduct)
productRouter.post("/newProduct", upload.single('profile-file'),createProduct)
productRouter.put("/editProduct/:id", editProduct)
productRouter.delete("deleteProduct/:id", deleteProduct)

export default productRouter