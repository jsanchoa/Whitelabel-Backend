import Category from "../models/Category.js"

export const getCategories = async() => {
    const categories = await Category.findAll({
    where: {
        status: 'A'
    }
    });

    return categories;
}

export const addCategories = async(data) => {

    const { image, name, description } = data;

    const categories = await Category.create({ image, name, description });

    return categories;
}

export const removeCategories = async(id) => {

    const categories = await Category.findByPk(id);

    await categories.update({ status: "I" });
}