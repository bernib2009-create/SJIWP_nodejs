import chalk from "chalk";

import { loadExpenses, saveExpenses } from "./storage.js";

export const currency = process.env.CURRENCY;

export default function formatExpense(expense) {
    const { id, description, amount } = expense; 
    //      ^ destrukturiranje objekta
    return `${id}. ${description}: ${chalk.green(amount)} ${currency}`;
}