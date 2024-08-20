import { Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ icon }) {
  return (
    <View>
      <Pressable>
              <Ionicons name={icon} size={size} color={color/>
      </Pressable>
    </View>
  );
}

export default IconButton;
