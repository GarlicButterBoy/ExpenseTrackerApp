import { Text, TextInput, View } from "react-native";

function Input({ label, type }) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput keyboardType={type} maxLength={maxLength} />
    </View>
  );
}

export default Input;
