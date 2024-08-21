import { Text, View, StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import ExpensesContext from "../store/expenses-context";

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext)
  return (
    <>
      <ExpensesOutput expensesPeriod="Last 7 Days" />
    </>
  );
}

export default RecentExpenses;
