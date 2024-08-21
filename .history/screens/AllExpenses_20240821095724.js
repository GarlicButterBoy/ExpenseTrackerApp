import { StyleSheet, Text, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import ExpensesList from "../components/ExpensesOutput/ExpensesList";
import { useContext } from "react";

function AllExpenses() {
  useContext(Exp)
  return (
    <>
      <ExpensesOutput expensesPeriod="Total" />
    </>
  );
}

export default AllExpenses;


