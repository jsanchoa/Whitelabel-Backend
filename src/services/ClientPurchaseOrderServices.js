import Client from "../models/Client.js";
import ClientPurchaseOrder from "../models/ClientPurchaseOrder.js"
import POProducts from "../models/POProducts.js";
import Product from "../models/Product.js";


export const getClientPurchaseOrder = async() => {
    const ClientPurchaseOrders = await ClientPurchaseOrder.findAll({
        attributes: ["id", "status"], // solo columnas de la orden
        include: [
            {
                model: Client,
                attributes: ["id", "name", "last_name","email"]
            },
            {
                model: POProducts,
                attributes: ["id", "quantity"],
                include: [
                {
                    model: Product,
                    attributes: ["product_id", "description", "price"] // info del producto
                }
                ]
            }
        ],
        order: [['id', 'ASC']],
        where: { status: 'A' }
    });

    return ClientPurchaseOrders;
}

export const newClientPurchaseOrder = async(data) => {

    // Se crea la orden del cliente
    const { client_id, products } = data; 

    const order = await ClientPurchaseOrder.create({
      client_id,
    });


    // Validar stock y preparar movimientos
    for (const p of products) {
        const product = await Product.findByPk(p.product_id);

        if (!product) {
            return res.send(`El producto con ID ${p.product_id} no existe`);
        }

        if (product.stock < p.quantity) {
            return res.send(
                `Stock insuficiente para el producto ${product.description}. Disponible: ${product.stock}, solicitado: ${p.quantity}`
            );
        }

        // Rebajar stock
        await product.update({
            stock: product.stock - p.quantity,
        });
    }

    // Asociar los productos a la orden
    const poProducts = products.map(p => ({
      product_id: p.product_id,
      purchase_order_id: order.id, // FK
      quantity: p.quantity,
    }));


    await POProducts.bulkCreate(poProducts); 

}

export const hideClientPurchaseOrder = async(id) => {

    const client = await ClientPurchaseOrder.findByPk(id);

    await client.update({ status: 'I' });

}