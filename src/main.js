import formatExpense, {currency} from "./format.js";
import { loadExpenses, saveExpenses } from "./storage.js";

const APP_NAME = "Troškovnik";
console.log(`== ${APP_NAME} ==`);

/* const args = process.argv.slice(2);
const command = args[0];
const arg1 = args[1];
const arg2 = args[2]; */

const [command, arg1, arg2] = process.argv.slice(2); // <- polje
//     ^ destrukturiranje polja

/* console.log("Naredba:", command);
console.log("Prvi argument:", arg1);
console.log("Drugi argument:", arg2); */

let expenses;
try {
    expenses = loadExpenses();
} catch (error) {
    console.error(`Datoteka expenses.json nije ispravna: ${error.message}`);
    process.exit(1);
}

switch (command) {

    case "add":
        const amount = Number(arg2); NaN
        if (arg1 === undefined || Number.isNaN(amount)) {
            console.error("Kroištenje: add 'opis' iznos");
            process.exit(1);
        }

        let newId = 1;
        if (expenses.length > 0) {
            newId = expenses[expenses.length - 1].id + 1;
        }

        expenses.push({id: newId, description: arg1, amount: amount});

        saveExpenses(expenses);

        console.log(`Dodano: ${arg1} (id: ${newId})`);
        break;

    case "list":
        if (expenses.length === 0) {
            console.log("Nema troškova.");
        } else {
            /* for (let i = 0; i < expenses.length; i++){
                const expense = expenses [i];
                console.log(formatExpense(expense)); 
            } */

            expenses.forEach((expense) => console.log(formatExpense(expense)));

        }

        break;

    case "total":

        let total = 0;

        for (const expense of expenses) {
            total = total + expense.amount;
        }
        console.log(`Ukupno: ${total} ${currency}`);

        break;

    default:
        console.error("Nepoznata naredba. Koristi: add, list, total.");
        process.exit(1);
}