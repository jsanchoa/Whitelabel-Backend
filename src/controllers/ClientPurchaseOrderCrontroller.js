import { getClientPurchaseOrder } from "../services/ClientPurchaseOrderServices.js";

export const ListClientPurchaseOrder = async(req, res) => {
    const data = await getClientPurchaseOrder();

    res.send(data);
}