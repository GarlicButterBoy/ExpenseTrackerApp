import { createContext } from "react";

const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function ExpensesContextProvider({children}) {
    return <ExpensesContext.Provider>{c</ExpensesContext.Provider>
}

export default ExpensesContextProvider;
