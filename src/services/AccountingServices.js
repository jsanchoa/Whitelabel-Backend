import Income from "../models/Income.js"
import Expense from "../models/Expense.js"
import Accounting from "../models/Accounting.js"

export const getIncomes = async() => {
    const incomes = await Income.findAll();
    return incomes;
}

export const getExpenses = async() => {
    const expenses = await Expense.findAll();
    return expenses;
}

export const getAccountingData = async() => {
    const accounting = await Accounting.findAll();
    return accounting;
}