import Users from "../models/Users.js";

export const getUserList = async() => {

  const users = await Users.findAll({ attributes: 
    ['users_id', 'name', 'last_name', 'username', 'roles_id', 'status']
  });

  return users;
}

export const getUserInfo = async(id) => {

  const user = await Users.findByPk(id);

  //Retorno la informacion
  return user;
}

export const createUser = async(data) => {

  const { name, last_name, password, username, roles_id, status } = data;

  if(!password) {
    await Users.create({ name: name, last_name: last_name, password: null, username: username, roles_id: roles_id, status: status });
  } else {
    //crea un usuario con contraseña
  }
}

export const modifyUser = async(id, data) => {

  const { name, last_name, password, username, roles_id, status } = data;

  if(!password) {
    await Users.update({ name: name, last_name: last_name, password: null, username: username, roles_id: roles_id, status: status });
  } else {
    //actualiza el usuario con la contraseña
  }
}

export const deleteUsuario = async(id) => {
  const { name, last_name, password, username, roles_id, status } = data;

  if(!password) {
    await Users.update({ name: name, last_name: last_name, password: null, username: username, roles_id: roles_id, status: status });
  } else {
    //actualiza el usuario con la contraseña
  }
}
