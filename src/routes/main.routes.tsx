import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeRouteStack } from "@source/modules/Home/routes/home.routes";
import { defaultRouteStackOptions } from "@source/utils/defaultRouteStackOptions";

export type MainRouteListStack = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<MainRouteListStack>();
export const MainRouteStack: React.FC = () => {
  const defaultOptions = React.useRef(defaultRouteStackOptions);

  return (
    <Stack.Navigator
    initialRouteName="Home"
    screenOptions={defaultOptions.current}>
      <Stack.Screen name="Home" component={HomeRouteStack} />
    </Stack.Navigator>
  );
};