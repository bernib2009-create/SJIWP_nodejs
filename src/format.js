export default function formatExpense(expense) {
    return `${expense.id}. ${expense.description}: ${expense.amount}`;
}