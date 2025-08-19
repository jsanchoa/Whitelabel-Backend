import POProducts from "../models/POProducts.js"
import { Op } from "sequelize";

export const getPOProducts = async() => {
    const poproducts = await POProducts.findAll({
    where: {
        nombre: { 
            [Op.ne]: "Administrator" 
        }
    }
    });

    return poproducts;
}