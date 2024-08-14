import { View, Text, StyleSheet, Pressable } from "react-native";

function ExpenseItem() {
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
    </Pressable>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({});
