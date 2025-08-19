import Expense from "../models/Expense.js";


export const getExpenses = async() => {
    const expenses = await Expense.findAll();

    return expenses;
}