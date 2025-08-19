import { getPOProducts } from "../services/POProductsServices.js";

export const ListPOProducts = async(req, res) => {
    const data = await getPOProducts();

    res.send(data);
}