import { getInventory } from "../services/InventoryServices.js";

export const ListInventory = async(req, res) => {
    const data = await getInventory();

    res.send(data);
}