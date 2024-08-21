import { createContext } from "react";

const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({des}) => {},
  deleteExpense: () => {},
  updateExpense: () => {},
});
