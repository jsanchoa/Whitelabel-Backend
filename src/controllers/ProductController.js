import { getProducts } from "../services/ProductServices.js";

export const ListProducts = async(req, res) => {
    const data = await getProducts();

    res.send(data);
}