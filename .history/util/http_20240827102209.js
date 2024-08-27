import axios from "axios";

function storeExpense(expenseData) {
  axios.post(
    "https://react-native-expenses-tr-303ba-default-rtdb.firebaseio.com/expenses.json"
  );
}
