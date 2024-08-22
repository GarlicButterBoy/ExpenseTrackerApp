import { Text, TextInput, View } from "react-native";
import Input from "./Input";

function ExpenseForm() {
function amountChangedHandler() {}

  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: 
        }}
      />
      <Input label="Date" />
      <Input label="Description" />
    </View>
  );
}

export default ExpenseForm;
