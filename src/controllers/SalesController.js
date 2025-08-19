import { SaleslistInfo } from "../services/SalesServices.js";

export const SalesList = async(req, res) => {

    //Esperar la info recibida de la BD
    const data = await SaleslistInfo();

    //Respuesta enviada
    res.send(data);
}
