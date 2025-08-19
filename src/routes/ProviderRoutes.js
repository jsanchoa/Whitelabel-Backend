import { addProvider, editProvider, infoProvider, ListProviders, removeProvider} from "../controllers/ProviderController.js";

export const ProviderRoutes = (app) => {

    const version = process.env.VERSION || "vtest";

    app.get(`/${version}/providers/list`, ListProviders);
    app.get(`/${version}/providers/info/:id`, infoProvider);
    app.post(`/${version}/providers/add`, addProvider);
    app.patch(`/${version}/providers/edit/:id`, editProvider);
    app.delete(`/${version}/providers/delete/:id`, removeProvider);

}