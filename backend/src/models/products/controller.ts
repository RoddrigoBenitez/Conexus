import { Request, Response } from "express";
import { productService } from "./service";

const { getProduct, createProduct, deleteProduct, editProduct, } = productService;

class ProductController{
    async getProduct(req: Request, res: Response) {
        const { _id } = req.params;
        
        try {
          const product = await getProduct(_id);
           
          return res.status(200).json(product);
        } catch (error) {
          return res.status(400).json({ error });
        }
      }

      async createProduct(req: Request, res: Response) {
        try {
           const products = req.body;
           const files = req.files as Express.Multer.File[];
          //  if (!files || files.length === 0) {
          //    res.status(400).json({ message: 'No file uploaded' });
          //    return;
          //  }
       
           // Delegar al servicio
           const product = await createProduct(products, files);
           console.log('Product created controller:', product);
           res.status(201).json(product);
        } catch (error) {
          console.error('Error creating product:', error);
          res.status(500).json({ message: 'Server error' });
        }
      }

      async deleteProduct(req: Request, res: Response) {
        const { _id } = req.params;
        try {
          const deletedProduct = await deleteProduct(_id);
          return res.status(200).json(deletedProduct);
        } catch (error) {
          return res.status(400).json({ error });
        }
      }
      async editProduct(req: Request, res: Response) {
        const { _id } = req.params;
        const editedProductBody = req.body;
        try {
          const editedProduct = await editProduct(_id, editedProductBody);
          return res.status(200).json(editedProduct);
        } catch (error) {
          return res.status(400).json({ error });
        }
      }
}

export const productController = new ProductController();
