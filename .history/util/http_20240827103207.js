import axios from "axios";

const BACKEND_URL =
  "https://react-native-expenses-tr-303ba-default-rtdb.firebaseio.com";

export function storeExpense(expenseData) {
  axios.post(BACKEND_URL + "/expenses.json", expenseData);
}

export a function fetchExpenses() {
  axios.get(BACKEND_URL + "/expenses.json");
}
