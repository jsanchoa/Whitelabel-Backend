import { getClients } from "../services/ClientServices.js";

export const ListClients = async(req, res) => {
    const data = await getClients();

    res.send(data);
}