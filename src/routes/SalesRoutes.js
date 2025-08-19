import { SalesList } from "../controllers/SalesController.js";
import { verifyToken } from "../middlewares/verifyToken.js";

export const SalesRoutes = (app) => {

    const version = process.env.VERSION || "vtest";

    //
    app.get(`/${version}/sales/list`, verifyToken, SalesList);

}