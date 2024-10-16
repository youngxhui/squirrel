import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";
import { FlatList, SafeAreaView, View, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {  useTheme } from '@rneui/themed';
import { Button } from '@rneui/themed';
import { ListItem } from '@rneui/themed';
export default function Index() {
  // const colorScheme = useColorScheme();
  // const tintColor = Colors[colorScheme ?? "light"].tint;

  const { theme } = useTheme();
  const listItems = [
    { id: "1", title: "全部", icon: "list-outline" },
    { id: "2", title: "收藏", icon: "star-outline" },
    { id: "3", title: "最近添加", icon: "time-outline" },
  ];

  return (
    <SafeAreaView style={{ backgroundColor: theme.colors.background }}
      className="flex-1"
    >

      <View className="mx-4 mt-6  rounded-xl overflow-hidden shadow-sm">
      
<ListItem>
  <ListItem.Content>
    <ListItem.Title>全部</ListItem.Title>
  </ListItem.Content>
</ListItem>
<ListItem>
  <ListItem.Content>
    <ListItem.Title>收藏</ListItem.Title>
  </ListItem.Content>
</ListItem>
<ListItem>
  <ListItem.Content>
    <ListItem.Title>最近添加</ListItem.Title>
  </ListItem.Content>
</ListItem>
        <FlatList
          data={listItems}
          renderItem={({ item, index }) => (
            <Link href={`/items/${item.id}`} asChild>
              <TouchableOpacity
                className={`py-3.5 px-4 ${
                  index !== listItems.length - 1
                    ? "border-b border-gray-200 dark:border-gray-700"
                    : ""
                }`}
              >
                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center">
                    <Ionicons
                      name={item.icon}
                      size={22}
                      // color={tintColor}
                      className="mr-3"
                    />
                    <ThemedText className="text-base font-normal text-gray-900 dark:text-gray-100">
                      {item.title}
                    </ThemedText>
                  </View>
                  <ThemedText className="text-gray-400 dark:text-gray-500"></ThemedText>
                </View>
              </TouchableOpacity>
            </Link>
          )}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
      </View>
    </SafeAreaView>
  );
}
