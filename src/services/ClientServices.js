import Client from "../models/Client.js"

export const getClients = async() => {
    const clients = await Client.findAll({ where: { status: 'A' }});
    return clients;
}

export const getClientInfo = async(id) => {
    const client = await Client.findByPk(id);
    return client;
    
}

export const modifyClient = async (id, data) => {
  const { name, last_name, email, phone } = data;

  // Modificar
  const client = await Client.update({ name: name, last_name: last_name, email: email, phone: phone }, { where: { id: id }});
  return client;
};

export const newClient = async (data) => {
  const { name, last_name, email, phone } = data;

  // Crear
  const client = await Client.create({
    name,
    last_name,
    email,
    phone: phone ?? null
  });
  return client;
};


export const hideClients = async (id) => {

  const client = await Client.findByPk(id);

  await client.update({ status: "I" });
};