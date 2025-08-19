import { AddProduct, DeleteProduct, ListProducts } from "../controllers/ProductController.js";

export const ProductRoutes = (app) => {

    const version = process.env.VERSION || "vtest";

    app.get(`/${version}/products/list`, ListProducts);
    app.post(`/${version}/products/add`, AddProduct);
    app.delete(`/${version}/products/delete/:id`, DeleteProduct);

}