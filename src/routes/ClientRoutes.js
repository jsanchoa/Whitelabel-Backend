import { addClient, ListClients, removeClient} from "../controllers/ClientController.js";

export const ClientsRoutes = (app) => {

    const version = process.env.VERSION || "vtest";

    app.get(`/${version}/clients/list`, ListClients);
    app.post(`/${version}/client/add`, addClient);
    app.delete(`/${version}/client/delete/:id`, removeClient);

}