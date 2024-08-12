import { FlatList, Text, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

function ExpensesOutput({ expenses }) {
  return (
    <View>
      <ExpensesSummary/>
      <View>
        <ExpensesList />
      </View>
    </View>
  );
}

export default ExpensesOutput;
