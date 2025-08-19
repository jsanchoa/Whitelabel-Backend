import { addClient, editClient, infoClient, ListClients, removeClient} from "../controllers/ClientController.js";

export const ClientsRoutes = (app) => {

    const version = process.env.VERSION || "vtest";

    app.get(`/${version}/clients/list`, ListClients);
    app.get(`/${version}/clients/info/:id`, infoClient);
    app.post(`/${version}/clients/add`, addClient);
    app.patch(`/${version}/clients/edit/:id`, editClient);
    app.delete(`/${version}/clients/delete/:id`, removeClient);

}