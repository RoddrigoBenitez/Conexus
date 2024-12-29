import mongoose, { Schema, Model } from "mongoose";
import { ICategory } from "../../types";

type CategoryModel = Model<ICategory, {}>

const categorySchema: Schema<ICategory, CategoryModel> = new Schema<ICategory, CategoryModel>({
    name: {
        type: String,
        required: true,
      },
    
      subCategories: [
        {
          type: Schema.Types.ObjectId, // referencia a SubCategory q esta abajo
          ref: "SubCategory",
        },
      ],
})

const Category: CategoryModel = mongoose.model<ICategory, CategoryModel>("Category", categorySchema);

export default Category