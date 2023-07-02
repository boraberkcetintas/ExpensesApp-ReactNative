import { Pressable, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ name, color, size, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.pressableContainer,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <View>
        <Ionicons color={color} size={size} name={name} />
      </View>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
  pressableContainer: {
    borderRadius: 24,
    padding: 8,
    marginHorizontal: 8,
    marginVertical: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});
