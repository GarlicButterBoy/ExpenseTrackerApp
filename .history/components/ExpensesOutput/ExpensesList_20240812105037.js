import { FlatList, Text } from "react-native";

function renderExpenseItem() {}

function ExpensesList({ expenses }) {
  return <FlatList data={expenses} renderItem={() => {}}/>;
}

export default ExpensesList;
