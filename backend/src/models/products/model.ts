import mongoose, { Schema, Model } from "mongoose";
import { IProduct } from "../../types";

type ProductModel = Model<IProduct, {}>;

const ProductSchema: Schema<IProduct, ProductModel>= new Schema<IProduct, ProductModel>({
    name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      stock: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      categoryId: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: false,
      },
      image: {
       type: String,
        required: true,
      },
});

const Product: ProductModel = mongoose.model<IProduct, ProductModel>("Product", ProductSchema);

export default Product