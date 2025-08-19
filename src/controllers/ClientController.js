import { getClientInfo, getClients, hideClients, modifyClient, newClient } from "../services/ClientServices.js";

export const ListClients = async(req, res) => {
    const data = await getClients();

    res.send(data);
}

export const infoClient = async(req, res) => {

    const id = req.params.id;

    const data = await getClientInfo(id);

    res.send(data);
}

export const addClient = async(req, res) => {
    const data = req.body;

    try {
        //Enviar la informacion al service
        const addClient = await newClient(data);


        res.send({ success: true, message: "A new client has been created sucessfully."})

    } catch(error) {
        res.send({ success: false, message: "A new client can not be created."})
    }

}

export const editClient = async(req, res) => {
    const id = req.params.id;
    const data = req.body;

    try {
        //Mdoificar la informacion al service
        await modifyClient(id, data);

        res.send({ success: true, message: "A new client has been modified sucessfully."})

    } catch(error) {
        res.send({ success: false, message: "A new client can not be modified."})
    }

}


export const removeClient = async(req, res) => {
    const id = req.params.id;

    try {
        //Enviar la informacion al service
        const hideClient = await hideClients(id);
        res.send({ success: true, message: "This client has been deleted sucessfully."})

    } catch(error) {
        res.send({ success: false, message: "This client can not be deleted."})
    }

}