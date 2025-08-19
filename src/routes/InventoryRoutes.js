import { ListInventory } from "../controllers/InventoryController.js";

export const InventoryRoutes = (app) => {

    const version = process.env.VERSION || "vtest";

    app.get(`/${version}/inventory/list`, ListInventory);

}