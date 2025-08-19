import { getPPOProducts, hidePPOProducts, newPPOProduct } from "../services/PPOProductServices.js";

export const ListPPOProducts = async(req, res) => {
    const data = await getPPOProducts();

    res.send(data);
}

export const addPPOProduct = async(req, res) => {
    const data = req.body;

    try {
        //Enviar la informacion al service
        const addPPOProduct = await newPPOProduct(data);


        res.send({ success: true, message: "A new purchase has been created sucessfully."})

    } catch(error) {
        res.send({ success: false, message: "A new purchase can not be created."})
    }

}


export const removePPOProduct = async(req, res) => {
    const id = req.params.id;

    try {
        //Enviar la informacion al service
        const hidePPOProduct = await hidePPOProducts(id);
        res.send({ success: true, message: "This purchase has been deleted sucessfully."})

    } catch(error) {
        res.send({ success: false, message: "This purchase can not be deleted."})
    }

}