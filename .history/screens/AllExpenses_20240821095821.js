import { StyleSheet, Text, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import ExpensesList from "../components/ExpensesOutput/ExpensesList";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";

function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <>
      <ExpensesOutput expenses={exp} expensesPeriod="Total" />
    </>
  );
}

export default AllExpenses;
