import { Text, View, StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  const recentExpenses = expensesCtx.expenses.filter((expense) => {});
  return (
    <>
      <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 Days" />
    </>
  );
}

export default RecentExpenses;
