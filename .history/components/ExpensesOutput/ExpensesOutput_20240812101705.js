import { Text, View } from "react-native";

function ExpensesOutput({ expenses }) {
  return (
    <View>
          <Text>SUMMARY</Text>
          <View>
              <Text>PERIOD</Text>
              <Text></Text>
          </View>
      <Text>LIST OF EXPENSES</Text>
    </View>
  );
}

export default ExpensesOutput;
