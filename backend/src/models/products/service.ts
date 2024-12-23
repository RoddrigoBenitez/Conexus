import { productDao } from "./dao";
import { IProduct } from "../../types";
import mongoose from "mongoose";
import Product from "./model";

// PENDIENTES DE CONFIGURAR
// import fs from "fs";
// import cloudinary from "../../config/cloudinary";


const { createProduct, getProductById, editProduct , deleteProduct} = productDao

class ProductService{
    async getProduct(id: string) {
        try {
          const product = await getProductById(id);
          return product;
        } catch (error) {
          throw Error((error as Error).message);
        }
      }
    
    // async getProducts(searchParams: ISearchParams) {} esta pendiente a los create filters

      async createProduct(product: IProduct) {  //<--- add a params ', files: Express.Multer.File[]'
        try {
        //   const uploadResults = await Promise.all(
        //     files.map((file) =>
        //       cloudinary.uploader.upload(file.path, { folder: 'products' })
        //     )
        //   );
      
        // files.forEach((file) => fs.unlinkSync(file.path));
      
        // const imageUrls = uploadResults.map((result) => result.secure_url);
    
        // const product = {
        //   ...productData,
        //   image: imageUrls, 
        // };
    
        //   console.log('Product input to save service:', product);
      
          return await createProduct(product);
        } catch (error) {
          console.error('Error in service:', error);
          throw new Error((error as Error).message);
        }
      }
    
      async editProduct(id: string, product: IProduct) {
        try {
          const updatedProduct = await editProduct(id, product);
          return updatedProduct;
        } catch (error) {
          throw Error((error as Error).message);
        }
      }
      async deleteProduct(id: string) {
        try {
          const deletedProduct = await deleteProduct(id);
          return deletedProduct;
        } catch (error) {
          throw Error((error as Error).message);
        }
      }
}

export const productService = new ProductService();
