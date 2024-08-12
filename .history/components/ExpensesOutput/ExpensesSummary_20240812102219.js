import { Text, View } from "react-native";

function ExpensesSummary({ periodName }) {
  return (
    <View>
      <Text>Last 7 Days</Text>
      <Text>$177.98</Text>
    </View>
  );
}

export default ExpensesSummary;
