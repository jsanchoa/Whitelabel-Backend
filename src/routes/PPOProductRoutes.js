import { addPPOProduct, ListPPOProducts, removePPOProduct} from "../controllers/PPOProductController.js";

export const PPOProductsRoutes = (app) => {

    const version = process.env.VERSION || "vtest";

    app.get(`/${version}/ppoproducts/list`, ListPPOProducts);
    app.post(`/${version}/ppoproduct/add`, addPPOProduct);
    app.delete(`/${version}/ppoproduct/delete/:id`, removePPOProduct);

}