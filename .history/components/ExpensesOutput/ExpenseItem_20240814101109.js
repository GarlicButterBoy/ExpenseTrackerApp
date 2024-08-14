import { View, Text, StyleSheet, Pressable } from "react-native";

function ExpenseItem({description, amount, date}) {
  return (
    <Pressable>
      <View>
        <View>
          <Text>DESCRIPTION</Text>
          <Text>DATE</Text>
        </View>
        <View>
          <Text>AMOUNT</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({});
