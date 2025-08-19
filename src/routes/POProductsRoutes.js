import { ListPOProducts } from "../controllers/POProductsController.js";

export const POProductsRoutes = (app) => {

    const version = process.env.VERSION || "vtest";

    app.get(`/${version}/poproducts/list`, ListPOProducts);

}