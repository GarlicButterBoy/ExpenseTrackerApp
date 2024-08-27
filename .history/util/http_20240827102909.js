import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://react-native-expenses-tr-303ba-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
}

export function fetchExpenses() {
  axios.get();
}
