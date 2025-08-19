//* Acá se importan todos los modelos creados
import Users from "./Users.js";
import Roles from "./Roles.js";
import Category from "./Category.js";
import Inventory from "./Inventory.js";
import POProducts from "./POProducts.js";
import Product from "./Product.js";
import ClientPurchaseOrder from "./ClientPurchaseOrder.js";
import PPOProducts from "./PPOProducts.js";
import Invoice from "./Invoice.js";
import ProviderInvoice from "./Provider_Invoice.js";
import Provider from "./Provider.js";
import Client from "./Client.js";


//!Acá se hacen las relaciones
/*
Ejemplo:
* Los roles pueden tener muchos usuarios pero...
* un usuario pertenece a un rol.
*/
Roles.hasMany(Users, { foreignKey: 'roles_id' });
Users.belongsTo(Roles, { foreignKey: 'roles_id' });

Category.hasMany(Product, { foreignKey: "category_id" });
Product.belongsTo(Category, { foreignKey: "category_id" });

Provider.hasMany(Product, { foreignKey: "provider_id" });
Product.belongsTo(Provider, { foreignKey: "provider_id" });

Client.hasMany(ClientPurchaseOrder, { foreignKey: "client_id" });
ClientPurchaseOrder.belongsTo(Client, { foreignKey: "client_id" });

Product.hasMany(ClientPurchaseOrder, { foreignKey: "po_product_id" });
ClientPurchaseOrder.belongsTo(Product, { foreignKey: "po_product_id" });

// ClientPurchaseOrder.js
ClientPurchaseOrder.hasMany(POProducts, { foreignKey: "purchase_order_id" });
POProducts.belongsTo(ClientPurchaseOrder, { foreignKey: "purchase_order_id" });

Product.hasMany(POProducts, { foreignKey: "product_id" });
POProducts.belongsTo(Product, { foreignKey: "product_id" });

// Provider - Provider_Invoice
Provider.hasMany(ProviderInvoice, { foreignKey: "provider_id" });
ProviderInvoice.belongsTo(Provider, { foreignKey: "provider_id" });

// Provider_Invoice - PPO_Products
ProviderInvoice.hasMany(PPOProducts, { foreignKey: "provider_invoice_id" });
PPOProducts.belongsTo(ProviderInvoice, { foreignKey: "provider_invoice_id" });

// Product - PPO_Products
Product.hasMany(PPOProducts, { foreignKey: "product_id" });
PPOProducts.belongsTo(Product, { foreignKey: "product_id" });

// Provider_Invoice - Inventory
ProviderInvoice.hasMany(Inventory, { foreignKey: "provider_invoice_id" });
Inventory.belongsTo(ProviderInvoice, { foreignKey: "provider_invoice_id" });

// Product - Inventory
Product.hasMany(Inventory, { foreignKey: "product_id" });
Inventory.belongsTo(Product, { foreignKey: "product_id" });

// Invoice - Client_Purchase_Order
ClientPurchaseOrder.hasMany(Invoice, { foreignKey: "purchase_order_id" });
Invoice.belongsTo(ClientPurchaseOrder, { foreignKey: "purchase_order_id" });




export {
  Users,
  Roles,
  Category,
  Inventory,
  POProducts,
  Product,
  ClientPurchaseOrder,
  PPOProducts,
  Invoice,
  ProviderInvoice,
  Provider,
  Client
};