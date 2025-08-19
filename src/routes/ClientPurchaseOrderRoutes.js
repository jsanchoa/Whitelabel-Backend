import { ListClientPurchaseOrder } from "../controllers/ClientPurchaseOrderController.js";

export const ClientPurchaseOrderRoutes = (app) => {

    const version = process.env.VERSION || "vtest";

    app.get(`/${version}/clientpurchaseorder/list`, ListClientPurchaseOrder);

}