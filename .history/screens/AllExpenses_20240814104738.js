import { StyleSheet, Text, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import ExpensesList from "../components/ExpensesOutput/ExpensesList";

function AllExpenses() {
  return (
    <>
      <View style={styles.rootContainer}>
        <ExpensesOutput expensesPeriod="Total" />
        <ExpensesList />
      </View>
    </>
  );
}

export default AllExpenses;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 2,
  },
});
