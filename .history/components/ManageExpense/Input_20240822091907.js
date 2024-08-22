import { Text, TextInput, View } from "react-native";

function Input({ label, type, maxLength }) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput {...textInputConfig} />
    </View>
  );
}

export default Input;
