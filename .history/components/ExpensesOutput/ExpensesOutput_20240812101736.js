import { Text, View } from "react-native";

function ExpensesOutput({ expenses }) {
  return (
    <View>
      <View>
        <Text>Last 7 Days</Text>
        <Text>$177.98</Text>
      </View>
      <Text>LIST OF EXPENSES</Text>
    </View>
  );
}

export default ExpensesOutput;
