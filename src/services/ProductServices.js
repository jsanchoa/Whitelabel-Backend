import Product from "../models/Product.js"
import { Op } from "sequelize";

export const getProducts = async() => {
    const products = await Product.findAll({
    where: {
        stock: { 
            [Op.gte]: 0
        },
        status: 'A'
    }
    });

    return products;
}

export const addProducts = async(data) => {

    const { category_id, provider_id, description, price, stock, sku } = data;

    const products = await Product.create({ category_id, provider_id, description, price, stock, sku });

    return products;
}

export const deleteProducts = async(id) => {

    const product = await Product.findByPk(id);

    await product.update({ status: "I" });
}