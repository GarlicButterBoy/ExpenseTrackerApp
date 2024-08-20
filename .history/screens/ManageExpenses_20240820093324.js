import { Text } from "react-native";

function ManageExpenses({route}) {
  const editedExpenseId = route.params.expenseId

  return <Text>Manage Expenses Screen</Text>;
}

export default ManageExpenses;
