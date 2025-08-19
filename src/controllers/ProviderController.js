import { getProviders } from "../services/ProviderServices.js";

export const ListProviders = async(req, res) => {
    const data = await getProviders();

    res.send(data);
}