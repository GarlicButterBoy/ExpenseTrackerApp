import { Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton() {
  return (
    <View>
      <Pressable>
        <Ionicons />
      </Pressable>
    </View>
  );
}

export default IconButton;
