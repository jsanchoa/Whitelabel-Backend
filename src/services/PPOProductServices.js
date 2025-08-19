import PPOProducts from "../models/PPOProducts.js";
import ProviderInvoice from "../models/ProviderInvoice.js";
import Product from "../models/Product.js";
import Provider from "../models/Provider.js";

export const getPPOProducts = async () => {
  const items = await PPOProducts.findAll({
    attributes: ["id", "quantity", "status"],
    include: [
      {
        model: ProviderInvoice,
        attributes: ["id", "provider_id", "bill_date"],
        include: [
          {
            model: Provider,
            attributes: ["id", "name"]
          }
        ]
      },
      {
        model: Product,
        attributes: ["id", "description", "price", "stock"]
      }
    ],
    order: [["id", "ASC"]],
    where: { status: "A" }
  });

  return items;
};

export const newPPOProduct = async (data) => {
  // Se registra la compra al proveedor
  const { provider_invoice_id, products } = data;

  // Aumenta stock por cada producto comprado
  for (const p of products) {
    const product = await Product.findByPk(p.product_id);
    await product.update({
      stock: product.stock + p.quantity
    });
  }

  // Guardar líneas en PPO_Products
  const rows = products.map((p) => ({
    provider_invoice_id,
    product_id: p.product_id,
    quantity: p.quantity,
    status: "A"
  }));

  await PPOProducts.bulkCreate(rows);
};

export const hidePPOProducts = async (id) => {
  const item = await PPOProducts.findByPk(id);
  await item.update({ status: "I" });
};