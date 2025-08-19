import { ListIncomes } from "../controllers/IncomeController.js";

export const IncomeRoutes = (app) => {

    const version = process.env.VERSION || "vtest";

    app.get(`/${version}/incomes/list`, ListIncomes);

}