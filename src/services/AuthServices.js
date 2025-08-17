import Users from "../models/Users.js";

export const getUsername = async(username) => {

  const user = await Users.findOne({ where: { username } });

  //Retorno la informacion
  return user;
}