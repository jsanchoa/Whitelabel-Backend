import Roles from "../models/Roles.js"
import { Op } from "sequelize";

export const getRoles = async() => {
    const roles = await Roles.findAll({
    where: {
        nombre: { 
            [Op.ne]: "Administrador" 
        }
    }
    });

    return roles;
}