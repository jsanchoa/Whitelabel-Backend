import { addClientPurchaseOrder, ListClientPurchaseOrder, removeClientPurchaseOrder } from "../controllers/ClientPurchaseOrderCrontroller.js";

export const ClientPurchaseOrderRoutes = (app) => {

    const version = process.env.VERSION || "vtest";

    app.get(`/${version}/clientpurchaseorder/list`, ListClientPurchaseOrder);
    app.post(`/${version}/clientpurchaseorder/add`, addClientPurchaseOrder);
    app.delete(`/${version}/clientpurchaseorder/delete/:id`, removeClientPurchaseOrder);

}