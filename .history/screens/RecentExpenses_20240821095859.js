import { Text, View, StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import ExpensesContextProvider from "../store/expenses-context";

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContextProvider)
  return (
    <>
      <ExpensesOutput expensesPeriod="Last 7 Days" />
    </>
  );
}

export default RecentExpenses;
