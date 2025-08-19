import { addCategories, getCategories, removeCategories } from "../services/CategoryServices.js";

export const ListCategories = async(req, res) => {
    const data = await getCategories();

    res.send(data);
}

export const addCategory = async(req, res) => {

    const data = req.body;

    const categories = await addCategories(data);

    res.status(201).json({ message: "Category has been created successfully", category: categories });
}

export const deleteCategory = async(req, res) => {

    const id = req.params.id;

    const categories = await removeCategories(id);

    res.status(201).json({ message: "Category has been deleted successfully", category: categories });
}