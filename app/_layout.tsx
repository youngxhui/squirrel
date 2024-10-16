import { Stack } from "expo-router";
import "@/global.css";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import * as NavigationBar from "expo-navigation-bar";
import { Platform, useColorScheme } from "react-native";
import "../global.css";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { createTheme, ThemeProvider as RNEThemeProvider, lightColors, darkColors, useTheme } from '@rneui/themed';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();


export default function RootLayout() {

  const colorScheme = useColorScheme();
  // android 底部导航栏颜色
  if (Platform.OS === "android") {
    NavigationBar.setPositionAsync("absolute");
    NavigationBar.setBackgroundColorAsync("#ffffff00");
    NavigationBar.setButtonStyleAsync("dark");
  }
  const ctheme = createTheme({
    lightColors: lightColors,
    darkColors: darkColors,
    components: {
      Button: {
        raised: true,
      },
    },
    mode: colorScheme === 'dark' ? 'dark' : 'light',
  });
 
  return (

      <RNEThemeProvider theme={ctheme}>
      <Stack>
        <Stack.Screen
          name="(tabs)"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="items/[id]" />
          <Stack.Screen
            name="add-article"
            options={{
              headerShown: false,
              presentation: "card",
              animation: "slide_from_bottom",
            }}
          />
          <Stack.Screen
            name="+not-found"
            options={{
            }}
          />
        </Stack>
      </RNEThemeProvider>

     
  
      
  );
}
