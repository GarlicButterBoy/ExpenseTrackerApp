import { Button, Text, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";

function ManageExpenses({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  navigation.setOptions(
    {
      title: isEditing ? "Edit Expense" : "Add Expense",
    },
    [navigation, isEditing]
  );

  return (
    <View>{isEditing && <IconButton icon="trash" color={GlobalStyles} />}</View>
  );
}

export default ManageExpenses;
