import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Football",
    amount: 39.99,
    date: new Date("2024-08-21"),
  },
  {
    id: "e2",
    description: "Foosball Table",
    amount: 389.99,
    date: new Date("2024-08-20"),
  },
  {
    id: "e3",
    description: "Shoes",
    amount: 59.99,
    date: new Date("2024-08-19"),
  },
  {
    id: "e4",
    description: "Weiner Schnitzel",
    amount: 5.99,
    date: new Date("2024-08-05"),
  },
  {
    id: "e5",
    description: "Book",
    amount: 39.99,
    date: new Date("2024-05-12"),
  },
  {
    id: "e6",
    description: "Foosball Table",
    amount: 389.99,
    date: new Date("2024-08-11"),
  },
  {
    id: "e7",
    description: "Shoes",
    amount: 59.99,
    date: new Date("2024-08-09"),
  },
  {
    id: "e8",
    description: "Weiner Schnitzel",
    amount: 5.99,
    date: new Date("2024-08-05"),
  },
  {
    id: "e9",
    description: "Book",
    amount: 39.99,
    date: new Date("2024-05-12"),
  },
  {
    id: "e10",
    description: "Foosball Table",
    amount: 389.99,
    date: new Date("2024-08-11"),
  },
  {
    id: "e11",
    description: "Shoes",
    amount: 59.99,
    date: new Date("2024-08-09"),
  },
  {
    id: "e12",
    description: "Weiner Schnitzel",
    amount: 5.99,
    date: new Date("2024-08-05"),
  },
  {
    id: "e13",
    description: "Book",
    amount: 39.99,
    date: new Date("2024-05-12"),
  },
];

const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
      case "UPDATE":
          const updatableExpenseIndex = state.findIndex(
              (expense) => expense.id === action.payload.id
          );
          const updatableExpense = state[updatableExpenseIndex];
          const updatedItem = {...upda}
    case "DELETE":
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>;
}

export default ExpensesContextProvider;
