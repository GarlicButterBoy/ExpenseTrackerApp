import { FlatList, Text, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

function ExpensesOutput({ expenses, period }) {
  return (
    <View>
      <ExpensesSummary periodName={period}/>
      <ExpensesList />
    </View>
  );
}

export default ExpensesOutput;
