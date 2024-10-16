import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { router, Tabs } from "expo-router";

import { Pressable, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerRight: () => (
          <View style={{ marginRight: 16 }}>
            <Pressable
              onPress={() => {
                // 处理新增按钮点击事件
                // console.log("新增按钮被点击");
                //    router.push("/add-article");
                router.push("/add-article");
              }}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
                padding: 8, // 增加点击区域
              })}
            >
              <Ionicons name="add-circle-outline" size={25} />
            </Pressable>
          </View>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "🐿 首页",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "home" : "home-outline"} />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "设置",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "settings" : "settings-outline"} />
          ),
          tabBarLabel: () => null,
        }}
      />
    </Tabs>
  );
}
