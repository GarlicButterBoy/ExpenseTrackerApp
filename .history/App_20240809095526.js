import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer></NavigationContainer>
    </>
  );
}
