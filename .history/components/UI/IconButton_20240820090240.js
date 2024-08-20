import { Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ icon }) {
  return (
    <Pressable onPress={onPress}>
      <View>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
}

export default IconButton;
