import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManageExpenses from "./screens/ManageExpenses";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return <BottomTabs.Navigator>
    <BottomTabs.Screen />
  </BottomTabs.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ManageExpense" component={ManageExpenses} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
