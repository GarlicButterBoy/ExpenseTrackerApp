import { Text, TextInput, View } from "react-native";
import Input from "./Input";

function ExpenseForm() {
  return (
    <View>
      <Input label="Amount" />
      <Input />
      <Input />
    </View>
  );
}

export default ExpenseForm;
