import { Text } from "react-native";

function ManageExpenses({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  return <Text>Manage Expenses Screen</Text>;
}

export default ManageExpenses;
