// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from "@expo/vector-icons/Ionicons";
import { type IconProps } from "@expo/vector-icons/build/createIconSet";
import { type ComponentProps } from "react";
import { useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";

export function TabBarIcon({
  style,
  color,
  ...rest
}: IconProps<ComponentProps<typeof Ionicons>["name"]> & { color?: string }) {
  const colorScheme = useColorScheme();
  const tintColor = Colors[colorScheme ?? "light"].tint;

  return (
    <Ionicons
      size={24}
      style={[{ marginBottom: -3 }, style]}
      color={color || tintColor}
      {...rest}
    />
  );
}
