import { Button, Text, View } from "react-native";

function ManageExpenses({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  navigation.setOptions(
    {
      title: isEditing ? "Edit Expense" : "Add Expense",
    },
    [navigation, isEditing]
  );

  return <View>
    <Button></Button>
  </View>;
}

export default ManageExpenses;
