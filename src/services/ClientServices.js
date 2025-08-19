import Client from "../models/Client.js"
import { Op } from "sequelize";

export const getClients = async() => {
    const clients = await Client.findAll({
    where: {
        nombre: { 
            [Op.ne]: "Administrator" 
        }
    }
    });

    return clients;
}