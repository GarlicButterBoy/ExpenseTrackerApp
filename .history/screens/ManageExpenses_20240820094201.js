import { Button, Text, View } from "react-native";
import IconButton from "../components/UI/IconButton";

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
    <View>
      {isEditing && <IconButton icon="trash" color=/>}
      <Button></Button>
      <Button></Button>
    </View>
  );
}

export default ManageExpenses;
