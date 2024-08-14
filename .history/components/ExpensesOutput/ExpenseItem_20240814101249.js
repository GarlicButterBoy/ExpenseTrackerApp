import { View, Text, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function ExpenseItem({ description, amount, date }) {
  return (
    <Pressable>
      <View style={styles.item}>
        <View>
          <Text>{description}</Text>
          <Text>{date}</Text>
        </View>
        <View>
          <Text>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  item: {
        padding: 12,
        marginVertical: 8,
      backgroundColor: GlobalStyles.colors.primary500
  },
});
