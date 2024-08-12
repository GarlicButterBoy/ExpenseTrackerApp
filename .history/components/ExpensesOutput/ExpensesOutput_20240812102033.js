import { FlatList, Text, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";

function ExpensesOutput({ expenses }) {
  return (
    <View>
      <ExpensesSummary/>
      <View>
        <FlatList />
      </View>
    </View>
  );
}

export default ExpensesOutput;
