import { addProvider, ListProviders, removeProvider } from "../controllers/ProviderController.js";

export const ProviderRoutes = (app) => {

    const version = process.env.VERSION || "vtest";

    app.get(`/${version}/providers/list`, ListProviders);
    app.post(`/${version}/rovider/add`, addProvider);
    app.delete(`/${version}/provider/delete/:id`, removeProvider);
}