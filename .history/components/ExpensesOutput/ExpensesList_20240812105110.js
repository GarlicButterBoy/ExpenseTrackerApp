import { FlatList, Text } from "react-native";

function renderExpenseItem(itemData) {
    return <Text>{ }</Text>
}

function ExpensesList({ expenses }) {
  return <FlatList data={expenses} renderItem={renderExpenseItem} />;
}

export default ExpensesList;
