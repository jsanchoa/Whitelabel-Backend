import Client from "../models/Client.js"

export const getClients = async() => {
    const clients = await Client.findAll();

    return clients;
}