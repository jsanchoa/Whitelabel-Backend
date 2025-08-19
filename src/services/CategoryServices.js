import Category from "../models/Category.js"
import { Op } from "sequelize";

export const getCategories = async() => {
    const categories = await Category.findAll({
    where: {
        nombre: { 
            [Op.ne]: "Administrator" 
        }
    }
    });

    return categories;
}