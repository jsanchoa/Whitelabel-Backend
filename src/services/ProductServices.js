import Product from "../models/Product.js"
import { Op } from "sequelize";

export const getProducts = async() => {
    const products = await Product.findAll({
    where: {
        stock: { 
            [Op.gte]: 0
        }
    }
    });

    return products;
}