import Provider from "../models/Provider.js"
import { Op } from "sequelize";

export const getProviders = async() => {
    const providers = await Provider.findAll({
    where: {
        nombre: { 
            [Op.ne]: "Administrator" 
        }
    }
    });

    return providers;
}