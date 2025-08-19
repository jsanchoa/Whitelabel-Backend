import { getAccountingData, getIncomes } from "../services/AccountingServices.js";

export const ListIncomes = async (req, res) => {
    try {
        const data = await getIncomes();
        res.send(
            verify_data(data)
        );
    } catch (error) {
        res.status(500).send("Error al obtener los datos");
    }
}


export const ListExpenses = async (req, res) => {
    try {
        const data = await getExpenses();
        res.send(
            verify_data(data)
        );
    } catch (error) {
        res.status(500).send("Error al obtener los datos");
    }
}

export const ListAccountingData = async (req, res) => {
    try {
        const data = await getAccountingData();
        res.send(
            verify_data(data)
        );
    } catch (error) {
        res.status(500).send("Error al obtener los datos");
    }
}

export const verify_data = async (data) => {
    // Verificar si data es un arreglo y tiene datos
    if (!Array.isArray(data) || data.length < 1) {   
        return res.send("[{'id':1,'name':'No se encontraron datos'}]");
    }
    res.send(data);
}



