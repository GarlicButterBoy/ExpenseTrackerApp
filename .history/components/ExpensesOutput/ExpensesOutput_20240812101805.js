import { FlatList, Text, View } from "react-native";

function ExpensesOutput({ expenses }) {
  return (
    <View>
      <View>
        <Text>Last 7 Days</Text>
        <Text>$177.98</Text>
      </View>
      <View>
        <FlatList />
      </View>
    </View>
  );
}

export default ExpensesOutput;
