//* Acá se importan todos los modelos creados
import Users from "./Users.js";
import Roles from "./Roles.js";


//!Acá se hacen las relaciones
/*
Ejemplo:
* Los roles pueden tener muchos usuarios pero...
* un usuario pertenece a un rol.
*/
Roles.hasMany(Users, { foreignKey: 'roles_id' });
Users.belongsTo(Roles, { foreignKey: 'roles_id' });


//! Creacion de usuarios de prueba cada vez que se inicia la BD pero tienen que desactivar el { force: true } en el index principal del proyecto
// await Users.create({ name: 'Jose', last_name: 'Sancho', roles_id: 1, password: 'KSDAKASDKAKSD', username: 'jsancho' });


export {
  Users,
  Roles
};