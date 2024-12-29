import mongoose, {Schema, Model} from "mongoose";
import { ISubCategory } from "../../types";

type SubCategoryModel = Model<ISubCategory, {}>

const subCategorySchema: Schema<ISubCategory, SubCategoryModel> = new Schema<ISubCategory, SubCategoryModel>({
    name:{
        type: String,
        require: true
    }
})

const SubCategory: SubCategoryModel = mongoose.model<ISubCategory, SubCategoryModel>("SubCategory", subCategorySchema);

export default SubCategory