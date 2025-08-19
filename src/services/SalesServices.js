import Client from "../models/Client.js";
import ClientPurchaseOrder from "../models/ClientPurchaseOrder.js";
import POProducts from "../models/POProducts.js";
import Product from "../models/Product.js";

export const SaleslistInfo = async() => {
    const sales = await ClientPurchaseOrder.findAll({
    include: [
        {
        model: Client,
        attributes: ["id", "name", "last_name", "email"],
        },
        {
        model: POProducts,
        include: [
            {
            model: Product,
            attributes: ["product_id", "description", "price"],
            }
        ]
        }
    ]
    });

    return sales;
}
