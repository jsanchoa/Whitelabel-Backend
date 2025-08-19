import { getProviderInfo, getProviders, hideProviders, modifyProvider, newProvider } from "../services/ProviderServices.js";

export const ListProviders = async(req, res) => {
    const data = await getProviders();

    res.send(data);
}

export const infoProvider = async(req, res) => {

    const id = req.params.id;

    const data = await getProviderInfo(id);

    res.send(data);
}

export const addProvider = async(req, res) => {
    const data = req.body;

    try {
        //Enviar la informacion al service
        const addProvider = await newProvider(data);


        res.send({ success: true, message: "A new Provider has been created sucessfully."})

    } catch(error) {
        res.send({ success: false, message: "A new Provider can not be created."})
    }

}

export const editProvider = async(req, res) => {
    const id = req.params.id;
    const data = req.body;

    try {
        //Mdoificar la informacion al service
        await modifyProvider(id, data);

        res.send({ success: true, message: "A new Provider has been modified sucessfully."})

    } catch(error) {
        res.send({ success: false, message: "A new Provider can not be modified."})
    }

}


export const removeProvider = async(req, res) => {
    const id = req.params.id;

    try {
        //Enviar la informacion al service
        const hideProvider = await hideProviders(id);
        res.send({ success: true, message: "This Provider has been deleted sucessfully."})

    } catch(error) {
        res.send({ success: false, message: "This Provider can not be deleted."})
    }

}