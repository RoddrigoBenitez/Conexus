import { productDao } from "./dao";
import { IProduct } from "../../types";
import fs from "fs";
import cloudinary from "../../config/cloudinary";


const { getAllProducts, createProduct, getProductById, editProduct , deleteProduct} = productDao

class ProductService{
    async getProduct(_id: string) {
        try {
          const product = await getProductById(_id);
          return product;
        } catch (error) {
          throw Error((error as Error).message);
        }
      }
    
     async getAllProducts() {
      try {
        const products = await getAllProducts()
        return products
      } catch (error) {
        throw Error((error as Error).message);
      }
     } //esta pendiente a los create filters

      async createProduct(products: IProduct, files: Express.Multer.File[]) {  //<--- add a params ', '
        try {
        //   const uploadResults = await Promise.all(
        //     files.map((file) =>
        //       cloudinary.uploader.upload(file.path, { folder: 'images' })
        //     )
        //   );
      
        // files.forEach((file) => fs.unlinkSync(file.path));
      
        // const imageUrls = uploadResults.map((result) => result.secure_url);
    
        // const product = {
        //   ...products,
        //   image: imageUrls, 
        // };
    
          console.log('Product input to save service:', products);
      
          return await createProduct(products);
        } catch (error) {
          console.error('Error in service:', error);
          throw new Error((error as Error).message);
        }
      }
    
      async editProduct(_id: string, product: IProduct) {
        try {
          const updatedProduct = await editProduct(_id, product);
          return updatedProduct;
        } catch (error) {
          throw Error((error as Error).message);
        }
      }
      async deleteProduct(_id: string) {
        try {
          const deletedProduct = await deleteProduct(_id);
          return deletedProduct;
        } catch (error) {
          throw Error((error as Error).message);
        }
      }
}

export const productService = new ProductService();
