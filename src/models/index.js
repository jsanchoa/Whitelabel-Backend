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


import bcrypt from "bcrypt";


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




//! Creacion de usuarios de prueba cada vez que se inicia la BD pero tienen que desactivar el { force: true } en el index principal del proyecto
//contraseña sin hashear
const pswd = "prueba"

//Numero de rondas para hashear la contraseña
const saltRounds = 10;

//Encripto la contraseña
const encryptedpassword = await bcrypt.hash(pswd, saltRounds);

//Creo un rol y usuario por defecto, usando el find (encuentre) or(Sino) Create(creelo).
await Roles.findOrCreate({ where: { name: 'Administrator'}, defaults: { name: 'Administrator'} });
await Users.findOrCreate({ where: { username: 'jsancho' }, defaults: { name: 'Jose', last_name: 'Sancho', roles_id: 1, password: encryptedpassword } });
await Users.findOrCreate({ where: { username: 'nsegura' }, defaults: { name: 'Noelia', last_name: 'Segura', roles_id: 1, password: encryptedpassword } });
await Users.findOrCreate({ where: { username: 'jtorres' }, defaults: { name: 'Jimena', last_name: 'Torres', roles_id: 1, password: encryptedpassword } });
await Users.findOrCreate({ where: { username: 'mmora' }, defaults: { name: 'Manuel', last_name: 'Mora', roles_id: 1, password: encryptedpassword } });
await Client.findOrCreate({ where: { email: "jose@example.com" }, defaults: {    
      name: "Jose",
      last_name: "Sancho",
      phone: "72761247",
      status: "A" }  // recuerda que solo acepta 'A' o 'I'
    });
await Provider.findOrCreate({
      where: { account_number: "CR05015202001026284066" }, // condición para buscar
      defaults: {                                          // valores a insertar si no existe
        name: "Ferretería La Unión",
        business_type: "Ferretería",
        address: "San José, Costa Rica",
        status: "A"
      }
    });
await Category.findOrCreate({
      where: { name: "Electrónica" },  // criterio único (puede ser name)
      defaults: {
        image: "electronics.png",
        description: "Dispositivos y accesorios electrónicos",
        status: "A"
      }
    });
await Product.findOrCreate({
      where: { sku: "SKU12345" },  // condición única para buscar
      defaults: {
        category_id: 1,
        provider_id: 1,
        description: "Mouse Gamer RGB",
        price: 25.50,
        stock: 100,
        status: "A"
      }
    });

await Product.findOrCreate({
  where: { sku: "SKU67890" },  // condición única para buscar
  defaults: {
    category_id: 1,
    provider_id: 1,
    description: "Teclado Mecánico RGB",
    price: 45.75,
    stock: 50,
    status: "A"
  }
});

await ClientPurchaseOrder.findOrCreate({
      where: {
        client_id: 1,        // ID del cliente
      },
      defaults: {
        status: "A"
      }
    });

await POProducts.findOrCreate({
      where: {
        product_id: 1,               // Producto comprado
        purchase_order_id: 1 // Asociado a la orden creada
      },
      defaults: {
        quantity: 3   // Cantidad de ese producto
      }
    });




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