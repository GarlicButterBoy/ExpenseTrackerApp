import { Pressable, View, Text } from "react-native";

function Button() {
  return (
    <View>
      <Pressable>
        <View>
                  <Text>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;
