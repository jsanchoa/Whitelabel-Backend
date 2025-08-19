import Income from "../models/Income.js"
import { Op } from "sequelize";

export const getIncomes = async() => {
    const incomes = await Income.findAll({
    where: {
        nombre: { 
            [Op.ne]: "Administrator" 
        }
    }
    });

    return incomes;
}