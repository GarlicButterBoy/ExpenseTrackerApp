import { StyleSheet, Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import ExpensesList from "../components/ExpensesOutput/ExpensesList";

function AllExpenses() {
  return (
    < style={styles.rootContainer}>
      <ExpensesOutput expensesPeriod="Total" />
      <ExpensesList />
    </>
  );
}

export default AllExpenses;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
