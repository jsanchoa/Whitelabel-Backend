import { getClientPurchaseOrder, hideClientPurchaseOrder, newClientPurchaseOrder } from "../services/ClientPurchaseOrderServices.js";

export const ListClientPurchaseOrder = async(req, res) => {
    const data = await getClientPurchaseOrder();

    res.send(data);
}


export const addClientPurchaseOrder = async(req, res) => {
    const data = req.body;

    try {
        //Enviar la informacion al service
        const addPurchaseOrder = await newClientPurchaseOrder(data);


        res.send({ success: true, message: "Client Purchase Orden has been created sucessfully."})

    } catch(error) {
        res.send({ success: false, message: "Client Purchase Orden can not be created."})
    }

}


export const removeClientPurchaseOrder = async(req, res) => {
    const id = req.params.id;

    try {
        //Enviar la informacion al service
        const hidePurchaseOrder = await hideClientPurchaseOrder(id);
        res.send({ success: true, message: "Client Purchase Orden has been deleted sucessfully."})

    } catch(error) {
        res.send({ success: false, message: "Client Purchase Orden can not be deleted."})
    }

}