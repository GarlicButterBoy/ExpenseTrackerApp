import { Text, StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import Button from "./Button";

function ErrorOverlay({ message }) {
  return (
    <View>
      <Text style={styles.container}>An error occurred!</Text>
      <Text>{message}</Text>
      <Button>Okay</Button>
    </View>
  );
}

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
