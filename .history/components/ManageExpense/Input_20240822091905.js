import { Text, TextInput, View } from "react-native";

function Input({ label, type, maxLength }) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput {...textInputConfid} />
    </View>
  );
}

export default Input;
