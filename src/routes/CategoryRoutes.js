import { ListCategories } from "../controllers/CategoryController.js";

export const CategoryRoutes = (app) => {

    const version = process.env.VERSION || "vtest";

    app.get(`/${version}/categories/list`, ListCategories);

}