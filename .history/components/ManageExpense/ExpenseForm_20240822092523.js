import { Text, TextInput, View } from "react-native";
import Input from "./Input";

function ExpenseForm() {
    function amountChangedHandler() { }
    

  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: "decimal-pad",
            onChangeText: amountChangedHandler,
          
        }}
      />
          <Input label="Date" textInputConfig={{
          placeholder: "YYY-MM-DD",
          keyboardType: "default",
            onChangeText: amountChangedHandler,
          
        }/>
      <Input label="Description" textInputConfig={{
          keyboardType: "decimal-pad",
            onChangeText: amountChangedHandler,
          
        }/>
    </View>
  );
}

export default ExpenseForm;
