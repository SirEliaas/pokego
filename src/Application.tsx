import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { MainRouteStack } from "@source/routes/main.routes";
import { ScreenHeader } from "./components/ScreenHeader";

export const Application: React.FC = () => {
  return (
    <NavigationContainer>
      <ScreenHeader />
      <MainRouteStack />
    </NavigationContainer>
  );
};