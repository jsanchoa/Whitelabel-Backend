import { addProducts, deleteProducts, getProducts } from "../services/ProductServices.js";

export const ListProducts = async(req, res) => {
    const data = await getProducts();

    res.send(data);
}

export const AddProduct = async(req, res) => {
    const data = req.body;

    //Service de añadir producto
    await addProducts(data);

    res.send({ success: true, message: "This Product has been created sucessfully."})
}

export const DeleteProduct = async(req, res) => {
    const id = req.params.id;

    //Service de añadir producto
    await deleteProducts(id);

    res.send({ success: true, message: "This Product has been deleted sucessfully."})
}