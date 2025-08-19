import Provider from "../models/Provider.js"

export const getProviders = async() => {
    const providers = await Provider.findAll();

    return providers;
}

export const newProvider = async (data) => {
  const { name, business_type, account_number, address, status } = data;

  // Crear
  const provider = await Provider.create({
    name,
    business_type,
    account_number,
    address: address ?? null,
    status: status ?? "A", 
  });
  return provider;
};


export const hideProviders = async (id) => {

  const provider = await Provider.findByPk(id);

  await provider.update({ status: "I" });
};