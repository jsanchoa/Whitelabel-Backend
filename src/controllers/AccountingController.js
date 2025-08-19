import { getAccountingData, getIncomes, getExpenses } from "../services/AccountingServices.js";

export const ListIncomes = async (req, res) => {
    try {
        const data = await getIncomes();
        const verifiedData = verify_data(data);
        res.send(verifiedData);
    } catch (error) {
        res.status(500).send("Error al obtener los datos");
    }
}

export const ListExpenses = async (req, res) => {
    try {
        const data = await getExpenses();
        const verifiedData = verify_data(data);
        res.send(verifiedData);
    } catch (error) {
        res.status(500).send("Error al obtener los datos");
    }
}

export const ListAccountingData = async (req, res) => {
    try {
        const data = await getAccountingData();
        const verifiedData = verify_data(data);
        res.send(verifiedData);
    } catch (error) {
        res.status(500).send("Error al obtener los datos");
    }
}

export const verify_data = (data) => {
    // Verificar si data es un arreglo y tiene datos
    if (!Array.isArray(data) || data.length < 1) {   
        return [{ id: 1, name: "No se encontraron datos" }];
    }
    return data;
}
