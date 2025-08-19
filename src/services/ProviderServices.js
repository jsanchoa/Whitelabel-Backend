import Provider from "../models/Provider.js"

export const getProviders = async () => {
  // lista todos los proveedores activos
  const providers = await Provider.findAll({ where: { status: "A" } });
  return providers;
};

export const getProviderInfo = async (id) => {
  // obtiene un proveedor por su PK
  const provider = await Provider.findByPk(id);
  return provider;
};

export const modifyProvider = async (id, data) => {
  const { name, business_type, account_number, address } = data;

  // actualizar proveedor
  const provider = await Provider.update(
    {
      name,
      business_type,
      account_number,
      address: address ?? null,
    },
    { where: { id: id } }
  );
  return provider;
};

export const newProvider = async (data) => {
  const { name, business_type, account_number, address } = data;

  // crear proveedor
  const provider = await Provider.create({
    name,
    business_type,
    account_number,
    address: address ?? null,
    status: "A", 
  });
  return provider;
};

export const hideProvider = async (id) => {
  const provider = await Provider.findByPk(id);

  await provider.update({ status: "I" });
};