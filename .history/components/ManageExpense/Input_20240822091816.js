import { Text, TextInput, View } from "react-native";

function Input({ label }) {
  return (
    <View>
          <Text>{label}</Text>
      <TextInput keyboardType={type} />
    </View>
  );
}

export default Input;
