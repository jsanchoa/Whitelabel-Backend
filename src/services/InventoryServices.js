import Inventory from "../models/Inventory.js"
import { Op } from "sequelize";

export const getInventory = async() => {
    const inventory = await Inventory.findAll({
    where: {
        nombre: { 
            [Op.ne]: "Administrator" 
        }
    }
    });

    return inventory;
}