import { Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ icon }) {
    return (
      <Pressable>
    <View>
      
              <Ionicons name={icon} size={size} color={color} />
      
    </View>
  );
}

export default IconButton;
