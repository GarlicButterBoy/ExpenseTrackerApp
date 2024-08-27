import { ActivityIndicator, StyleSheet, View } from "react-native";

function LoadingOverlay() {
  return (
    <View>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        
    }
});
