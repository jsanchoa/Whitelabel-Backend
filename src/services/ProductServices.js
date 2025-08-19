import Product from "../models/Product.js"
import { Op } from "sequelize";

export const getProducts = async() => {
    const products = await Product.findAll({
    where: {
        nombre: { 
            [Op.ne]: "Administrator" 
        }
    }
    });

    return products;
}