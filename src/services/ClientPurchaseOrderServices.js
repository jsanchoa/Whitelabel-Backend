import ClientPurchaseOrder from "../models/ClientPurchaseOrder.js"

export const getClientPurchaseOrder = async() => {
    const ClientPurchaseOrders = await ClientPurchaseOrder.findAll();

    return ClientPurchaseOrders;
}