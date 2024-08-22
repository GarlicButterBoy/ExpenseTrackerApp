import { Text, TextInput, View } from "react-native";
import Input from "./Input";

function ExpenseForm() {
  function amountChangedHandler() {}

  return (
    <View>
      <View>
        <Input
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: amountChangedHandler,
          }}
        />
        <Input
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            keyboardType: "default",
            maxLength: 10,
            onChangeText: () => {},
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          keyboardType: "default",
          onChangeText: () => {},
          multiline: true,
          //autoCapitalize: "words", //default is sentences
          //autoCorrect: false, //default is true
        }}
      />
    </View>
  );
}

export default ExpenseForm;
