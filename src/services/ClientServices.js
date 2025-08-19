import Client from "../models/Client.js"

export const getClients = async() => {
    const clients = await Client.findAll();
    return clients;
}

export const newClient = async (data) => {
  const { name, last_name, email, phone, status } = data;

  // Crear
  const client = await Client.create({
    name,
    last_name,
    email,
    phone: phone ?? null,
    status: status ?? "A", 
  });
  return client;
};


export const hideClients = async (id) => {

  const client = await Client.findByPk(id);

  await client.update({ status: "I" });
};