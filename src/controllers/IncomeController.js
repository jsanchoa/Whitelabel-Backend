import { getIncomes } from "../services/IncomeServices.js";

export const ListIncomes = async(req, res) => {
    const data = await getIncomes();

    res.send(data);
}