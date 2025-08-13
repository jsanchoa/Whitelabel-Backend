//* Acá se importan todos los modelos
import Usuarios from "./Usuarios.js";
import Citas from "./Citas.js";
import EntrenamientosXCitas from "./EntrenamientosXCitas.js";
import Entrenamientos from "./Entrenamientos.js";
import TiposRutinas from "./TiposRutinas.js";
import Roles from "./Roles.js";
import Membresias from "./Membresias.js";
import EstadosMembresia from "./EstadosMembresia.js";
import TiposMembresia from "./TiposMembresia.js";

//!Acá se hacen las relaciones

//* Usuario tiene muchas citas, adicional el foreign key es id_usuario
Usuarios.hasMany(Citas, { foreignKey: 'id_usuario' });
Roles.hasMany(Usuarios, { foreignKey: 'id_rol' });
Usuarios.belongsTo(Roles, { foreignKey: 'id_rol' });

//* Usuario tiene muchas citas, adicional el foreign key es id_usuario
Citas.belongsTo(Usuarios, { foreignKey: 'id_usuario' });
Citas.hasMany(EntrenamientosXCitas, { foreignKey: 'id_cita' });
EntrenamientosXCitas.belongsTo(Citas, { foreignKey: 'id_cita' });
Entrenamientos.hasMany(EntrenamientosXCitas, { foreignKey: 'id_entrenamiento' });
EntrenamientosXCitas.belongsTo(Entrenamientos, { foreignKey: 'id_entrenamiento' });
TiposRutinas.hasMany(Entrenamientos, { foreignKey: 'id_tipoRutina' });
Entrenamientos.belongsTo(TiposRutinas, { foreignKey: 'id_tipoRutina' });
Usuarios.hasMany(Entrenamientos, { foreignKey: 'id_usuario' });
Entrenamientos.belongsTo(Usuarios, { foreignKey: 'id_usuario'});
Usuarios.hasMany(Membresias, { foreignKey: 'id_usuario' });
Membresias.belongsTo(Usuarios, { foreignKey: 'id_usuario' });
EstadosMembresia.hasMany(Membresias, { foreignKey: 'id_estadoMembresia' });
Membresias.belongsTo(EstadosMembresia, { foreignKey: 'id_estadoMembresia' });
TiposMembresia.hasMany(Membresias, { foreignKey: 'id_tipoMembresia' });
Membresias.belongsTo(TiposMembresia, { foreignKey: 'id_tipoMembresia' });

export {
  Usuarios,
  Citas,
  EntrenamientosXCitas,
  Entrenamientos,
  TiposRutinas,
  Roles,
  Membresias,
  EstadosMembresia,
  TiposMembresia
};