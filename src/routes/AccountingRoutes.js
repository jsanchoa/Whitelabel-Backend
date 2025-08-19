import {ListAccountingData, ListIncomes, ListExpenses } from "../controllers/AccountingController.js";
//import { ListIncomes } from "../controllers/AccountingController.js";

export const AccountingRoutes = (app) => {

    const version = process.env.VERSION || "vtest";

    app.get(`/${version}/incomes/list`, ListIncomes);
    app.get(`/${version}/expenses/list`, ListExpenses);
    app.get(`/${version}/accountingdata/list`, ListAccountingData);

}