import { ISubCategory } from "../../types";
import SubCategory from "./model";

class SubCategoryDao{
    async getSubCategories() {
        try {
          return await SubCategory.find();
        } catch (error) {
          throw Error((error as Error).message);
        }
      }
      async getSubCategoryById(_id: string) {
        try {
          return await SubCategory.findById(_id)
        } catch (error) {
          throw new Error((error as Error).message);
        }
      }
    async createSubCategory(subCategory: { name: string }) {
        try {
          const newSubCategory = await SubCategory.create(subCategory);
          return newSubCategory;
        } catch (error) {
          throw new Error((error as Error).message);
        }
      }
      async updateSubCategory(_id: string, subCategory: ISubCategory) {
        try {
          const updatedSubCategory = await SubCategory.findByIdAndUpdate(_id, subCategory, {
            new: true,
          });
          return updatedSubCategory;
        } catch (error) {
          throw Error((error as Error).message);
        }
      }
      async deleteSubCategory(_id: string) {
        try {
          const deletedSubCategory = await SubCategory.findByIdAndDelete(_id);
          return deletedSubCategory;
        } catch (error) {
          throw new Error((error as Error).message);
        }
      }
}

const subCategoryDao = new SubCategoryDao();

export default subCategoryDao