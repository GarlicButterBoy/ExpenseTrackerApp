import { Text, View } from "react-native";

function ExpensesSummary({ expenses, periodName }) {
  return (
    <View>
      <Text>{periodName}</Text>
      <Text>$177.98</Text>
    </View>
  );
}

export default ExpensesSummary;
