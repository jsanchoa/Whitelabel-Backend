import database from "../database/DatabaseConnection.js";

export const getUsuarios = async() => {
    return await database.query(`SELECT "id_usuario", "nombre", "apellido", "correo", "telefono", "cedula", "estado" FROM "USUARIOS"`,
        {
      type: database.QueryTypes.SELECT
        }
    );

    // return Usuarios.findAll();
}

export const getUsuarioInfo = async(id) => {

  return await database.query(
    `SELECT "id_usuario", "nombre", "apellido", "correo", "telefono", "cedula", "id_rol", "estado" FROM "USUARIOS" WHERE "id_usuario" = :p_id_usuario`,
    {
      replacements: { p_id_usuario: id },
      type: database.QueryTypes.SELECT
    }
  );
}

export const crearUsuario = async(data) => {

  const { nombre, apellido, correo, telefono, cedula, id_rol } = data;

  return await database.query(
    `BEGIN
       paquete_usuarios.insertar_usuario(:p_nombre, :p_apellido, :p_correo, :p_telefono, :p_cedula, :p_rol);
     END;`,
    {
      replacements: { p_nombre: nombre, p_apellido: apellido, p_correo: correo, p_telefono: telefono, p_cedula: cedula, p_rol: id_rol },
      type: database.QueryTypes.INSERT
    }
  );
}

export const modificaUsuario = async(id, data) => {

  const { nombre, apellido, correo, telefono, cedula, id_rol } = data;

  return await database.query(
    `BEGIN
       paquete_usuarios.modificar_usuario(:p_id_usuario, :p_nombre, :p_apellido, :p_correo, :p_telefono, :p_cedula, :p_rol);
     END;`,
    {
      replacements: { p_id_usuario: id, p_nombre: nombre, p_apellido: apellido, p_correo: correo, p_telefono: telefono, p_cedula: cedula, p_rol: id_rol },
      type: database.QueryTypes.UPDATE
    }
  );
}

export const deleteUsuario = async(id) => {
  return await database.query(
    `BEGIN
       paquete_usuarios.eliminar_usuario(:id_usuario);
     END;`,
    {
      replacements: { id_usuario: id },
      type: database.QueryTypes.DELETE
    }
  );
}