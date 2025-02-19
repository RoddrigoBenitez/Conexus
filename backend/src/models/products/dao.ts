import { IProduct } from "../../types";
import Product from "./model";
import mongoose from "mongoose";

class ProductDao{
    async createProduct(product: IProduct) {
        try {
          const newProduct = await Product.create(product);
          return newProduct;
        } catch (error) {
          throw Error((error as Error).message);
        }
      };

     async getAllProducts(){
      try {
        const products = await Product.find()
        return products
      } catch (error) {
        throw Error((error as Error).message);
      }
     }  

    async getProductById(productId: string) {
        try {
          const product = await Product.findById(productId);
          return product;
        } catch (error) {
          throw Error((error as Error).message);
        }
    }
    async editProduct(productId: string, product: IProduct) {
        try {
          const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            product,
            { new: true }
          );
          return updatedProduct;
        } catch (error) {
          throw Error((error as Error).message);
        }
    };
    async deleteProduct(productId: string) {
        try {
          const deletedProduct = await Product.findByIdAndDelete(productId);
          return deletedProduct;
        } catch (error) {
          throw Error((error as Error).message);
        }
      }

}


export const productDao = new ProductDao();
