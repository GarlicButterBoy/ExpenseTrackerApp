import { FlatList, Text } from "react-native";

function ExpensesList({ expenses }) {
  return <FlatList data={expenses} />;
}

export default ExpensesList;
