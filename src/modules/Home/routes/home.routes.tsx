import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import PokemonListScreen from "../screens/PokemonListScreen";
import PokemonDetailScreen from "../screens/PokemonDetailScreen";

// Others
import { defaultRouteStackOptions } from "@source/utils/defaultRouteStackOptions";
import { Pokemon } from "../models/Pokemon";

// Route List
export type HomeRouteListStack = {
  PokemonList: undefined;
  PokemonDetail: { pokemon: Pokemon };
};

const Stack = createNativeStackNavigator<HomeRouteListStack>();
export const HomeRouteStack: React.FC = () => {
  const defaultOptions = React.useRef(defaultRouteStackOptions);

  return (
    <Stack.Navigator
    initialRouteName="PokemonList"
    screenOptions={defaultOptions.current}>
      <Stack.Screen name="PokemonList" component={PokemonListScreen} />
      <Stack.Screen name="PokemonDetail" component={PokemonDetailScreen} />
    </Stack.Navigator>
  );
};
