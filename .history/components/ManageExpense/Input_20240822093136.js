import { StyleSheet, Text, TextInput, View } from "react-native";

function Input({ label, textInputConfig }) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputContainer}>{label}</Text>
      <TextInput {...textInputConfig} style={styles.input} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 16,
  },
  label: {},
  input: {},
});
