import axios from "axios";

const BACKEND_URL =
  "https://react-native-expenses-tr-303ba-default-rtdb.firebaseio.com/";

export function storeExpense(expenseData) {
  axios.post(
    "https://react-native-expenses-tr-303ba-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
}

export function fetchExpenses() {
  axios.get(
    "https://react-native-expenses-tr-303ba-default-rtdb.firebaseio.com/expenses.json"
  );
}
