import Income from "../models/Income.js"

export const getIncomes = async() => {
    const incomes = await Income.findAll();

    return incomes;
}