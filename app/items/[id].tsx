import { ThemedText } from "@/components/ThemedText";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

export default function ItemDetails() {
  const { id } = useLocalSearchParams();
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ThemedText>Item Details for ID: {id}</ThemedText>
    </View>
  );
}
