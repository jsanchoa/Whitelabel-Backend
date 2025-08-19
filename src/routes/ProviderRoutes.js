import { ListProviders } from "../controllers/ProviderController.js";

export const ProviderRoutes = (app) => {

    const version = process.env.VERSION || "vtest";

    app.get(`/${version}/providers/list`, ListProviders);

}