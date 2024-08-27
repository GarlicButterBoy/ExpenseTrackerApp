import { ActivityIndicator, StyleSheet, View } from "react-native";

function LoadingOverlay() {
  return (
    <View>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
}

export default LoadingOverlay;

const styles = StyleSheet.create({})''
