//* Acá se importan todos los modelos creados
import Users from "./Users.js";
import Roles from "./Roles.js";
import Category from "./Category.js";
import Inventory from "./Inventory.js";
import POProducts from "./POProducts.js";
import Product from "./Product.js";



import bcrypt from "bcrypt";


//!Acá se hacen las relaciones
/*
Ejemplo:
* Los roles pueden tener muchos usuarios pero...
* un usuario pertenece a un rol.
*/
Roles.hasMany(Users, { foreignKey: 'roles_id' });
Users.belongsTo(Roles, { foreignKey: 'roles_id' });


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


export {
  Users,
  Roles,
  Category,
  Inventory,
  POProducts,
  Product
};