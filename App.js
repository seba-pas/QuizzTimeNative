import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import Quiz from "./screens/Quiz";
import Result from "./screens/Result";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import MyStack from "./navigation";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    'Mogra': require("./assets/Mogra-Regular.ttf"),
  });
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 16,
    backgroundColor: "white",
  },
});
