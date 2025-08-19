import { addCategory, deleteCategory, ListCategories } from "../controllers/CategoryController.js";

export const CategoryRoutes = (app) => {

    const version = process.env.VERSION || "vtest";

    app.get(`/${version}/categories/list`, ListCategories);
    app.post(`/${version}/categories/add`, addCategory);
    app.delete(`/${version}/categories/delete/:id`, deleteCategory);

}