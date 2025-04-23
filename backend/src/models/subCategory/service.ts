import { ISubCategory } from "../../types";
import subCategoryDao from "./dao";

const {getSubCategories,  getSubCategoryById, createSubCategory, updateSubCategory, deleteSubCategory} = subCategoryDao

class SubCaterogySercice{
    async getSubCategories() {
        try {
          const subCategories = await getSubCategories()
          return subCategories;
        } catch (error) {
          throw new Error((error as Error).message);
        }
      }
      async getSubCategoryById(_id: string){
        try {
          const getSubCategory = await getSubCategoryById(_id)
          return getSubCategory
        } catch (error) {
            throw Error((error as Error).message);
        }
      }

    async createSubCategory(subCategory: { name: string }) {
        try {
          const newSubCategory = await createSubCategory(subCategory);
          return newSubCategory;
        } catch (error) {
          throw new Error((error as Error).message);
        }
      }
      async updateSubCategory(_id: string, subCategory: ISubCategory) {
        try {
          const updatedSubCategory = await updateSubCategory(_id, subCategory);
          return updatedSubCategory;
        } catch (error) {
          throw Error((error as Error).message);
        }
      }

      async deleteSubCategory(_id: string) {
        try {
          const deletedSubCategory = await deleteSubCategory(_id);
          return deletedSubCategory;
        } catch (error) {
          throw new Error((error as Error).message);
        }
      }

}

const subCategoryService = new SubCaterogySercice()

export default subCategoryService