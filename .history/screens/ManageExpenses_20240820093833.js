import { Text } from "react-native";

function ManageExpenses({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  navigation.setOptions({
    title: isEditing ? "Edit Expense" : "Add Expense",
  });

  return <Text>Manage Expenses Screen</Text>;
}

export default ManageExpenses;
