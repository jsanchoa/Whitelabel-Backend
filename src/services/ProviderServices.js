import Provider from "../models/Provider.js"

export const getProviders = async() => {
    const providers = await Provider.findAll();

    return providers;
}