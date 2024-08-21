import { createContext } from "react";

const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: () => {},
  updateExpense: ({ description, amount, date }) => {},
});
