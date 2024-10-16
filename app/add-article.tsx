import React, { useState, useCallback, useMemo } from "react";
import { TextInput, TouchableOpacity, StatusBar, Platform } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "react-native";

var { Readability } = require("@mozilla/readability");
var jsdom = require("jsdom-jscore-rn");

export default function AddArticle() {
  const [url, setUrl] = useState("");
  const colorScheme = useColorScheme();
  const tintColor = Colors[colorScheme ?? "light"].tint;

  const isValidUrl = useMemo(() => {
    const urlPattern =
      /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    return urlPattern.test(url) && url.trim() !== "";
  }, [url]);

  const handleAddArticle = useCallback(() => {
    if (isValidUrl) {
      // 在这里添加文章的逻辑
      console.log("添加文章:", url);
      // 获取文章
      fetch(url)
        .then((response) => response.text())
        .then((html) => {
          jsdom.env(html, function (_err: any, window: { document: any }) {
       
            const reader = new Readability(window.document);
            const article = reader.parse();
            console.log(article);
          });
        });
    }
  }, [isValidUrl, url]);

  return (
    <ThemedView
      className="flex-1"
      style={[
        { paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 },
      ]}
    >
      <ThemedView className="flex-row items-center justify-between px-4 py-3">
        <TouchableOpacity onPress={() => router.back()}>
          <ThemedText
            className="text-base font-medium"
            style={{ color: tintColor }}
          >
            取消
          </ThemedText>
        </TouchableOpacity>
        <ThemedText className="text-lg font-semibold">添加新文章</ThemedText>
        <TouchableOpacity disabled={!isValidUrl} onPress={handleAddArticle}>
          <ThemedText
            className={`text-base font-medium ${
              isValidUrl ? "" : "text-gray-400"
            }`}
            style={{ color: isValidUrl ? tintColor : "#9CA3AF" }}
          >
            添加
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>

      <ThemedView className="p-4">
        <TextInput
          value={url}
          onChangeText={setUrl}
          placeholder="输入 URL"
          placeholderTextColor="#9CA3AF"
          className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-4 py-3"
        />
      </ThemedView>
    </ThemedView>
  );
}
