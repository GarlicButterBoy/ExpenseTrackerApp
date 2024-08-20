import { Button, StyleSheet, Text, View } from "react-native";
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

  function deleteExpenseHandler() {}

  return (
    <View>
      {isEditing && (
        <IconButton
          icon="trash"
          color={GlobalStyles.colors.error500}
          size={36}
          onPress={deleteExpenseHandler}
        />
      )}
    </View>
  );
}

export default ManageExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {},
});
