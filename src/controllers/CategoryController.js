import { getCategories } from "../services/CategoryServices.js";

export const ListCategories = async(req, res) => {
    const data = await getCategories();

    res.send(data);
}