import { Text, TextInput, View } from "react-native";

function Input({ label }) {
  return (
    <View>
          <Text>{label}</Text>
      <TextInput  />
    </View>
  );
}

export default Input;
