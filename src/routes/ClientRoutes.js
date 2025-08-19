import { ListClients } from "../controllers/ClientController.js";

export const ClientsRoutes = (app) => {

    const version = process.env.VERSION || "vtest";

    app.get(`/${version}/categories/list`, ListClients);

}