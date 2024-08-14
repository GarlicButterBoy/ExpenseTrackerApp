import { StyleSheet, Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import ExpensesList from "../components/ExpensesOutput/ExpensesList";

function AllExpenses() {
  return (
    <>
      <ExpensesOutput expensesPeriod="Total" />
      <ExpensesList />
    </>
  );
}

export default AllExpenses;

const styles = StyleSheet.create({
  
});
