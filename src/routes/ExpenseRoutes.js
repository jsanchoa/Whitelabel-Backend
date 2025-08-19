import { ListExpenses } from "../controllers/ExpenseController.js";

export const ExpenseRoutes = (app) => {

    const version = process.env.VERSION || "vtest";

    app.get(`/${version}/expenses/list`, ListExpenses);

}