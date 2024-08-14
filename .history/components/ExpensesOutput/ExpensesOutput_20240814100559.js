import { FlatList, StyleSheet, Text, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Football",
    amount: 39.99,
    date: new Date("2024-08-12"),
  },
  {
    id: "e2",
    description: "Foosball Table",
    amount: 389.99,
    date: new Date("2024-08-11"),
  },
  {
    id: "e3",
    description: "Shoes",
    amount: 59.99,
    date: new Date("2024-08-09"),
  },
  {
    id: "e4",
    description: "Weiner Schnitzel",
    amount: 5.99,
    date: new Date("2024-08-05"),
  },
  {
    id: "e5",
    description: "Book",
    amount: 39.99,
    date: new Date("2024-05-12"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary100
  },
});
