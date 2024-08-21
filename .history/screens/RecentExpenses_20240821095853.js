import { Text, View, StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";

function RecentExpenses() {
  const expensesCtx = useContext
  return (
    <>
      <ExpensesOutput expensesPeriod="Last 7 Days" />
    </>
  );
}

export default RecentExpenses;
