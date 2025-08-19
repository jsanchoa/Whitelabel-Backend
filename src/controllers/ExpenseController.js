import { getExpenses } from "../services/ExpenseServices.js";

export const ListExpenses = async (req, res) => {
    try {
        const data = await getExpenses();

        // Verificar si data es un arreglo y tiene datos
        if (!Array.isArray(data) || data.length < 1) {
            return res.send("No se encontraron datos");
        }

        // res.send(data);
        res.send("Hola mundo");
    } catch (error) {
        res.status(500).send("Error al obtener los datos");
    }
}
