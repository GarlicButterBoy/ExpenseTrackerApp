import { Text, View, StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

function RecentExpenses() {
  return (
    <View style={styles.rootContainer}>
      <ExpensesOutput expensesPeriod="Last 7 Days" />
    </View>
  );
}

export default RecentExpenses;

