import React from "react";

import * as SplashScreen from "expo-splash-screen";

import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_700Bold,
} from "@expo-google-fonts/josefin-sans";
import { AppRoutes } from "@routes/AppRoutes";
import { StatusBar } from "react-native";
import { theme } from "@global/styles/global";

export default function App() {
  const [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_700Bold,
  });

  SplashScreen.preventAutoHideAsync();

  if (!fontsLoaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.gray800}
      />
      <AppRoutes />
    </>
  );
}
