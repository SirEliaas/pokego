import React, { useCallback, useContext } from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { SvgUri as SVG } from "react-native-svg";
import { useWindowDimensions, View } from "react-native";
import { useAnimatedStyle, withTiming } from "react-native-reanimated";
import { useTheme } from "styled-components";

import { ScreenComponent } from "@source/components/ScreenComponent";
import getPokemonColorByTypes from "@source/utils/getPokemonColorByType";

import PokemonService from "../../services/PokemonService";
import { PokemonProvider } from "../../contexts/PokemonContext";
import { HomeRouteListStack } from "../../routes/home.routes";
import { PokemonSpecie } from "../../models/PokemonSpecie";

import { 
  PokemonDetailsCard, 
  PokemonDetailsCardHeader, 
  PokemonDetailsCardHeaderContent, 
  PokemonDetailsImageWrapper, 
  PokemonCardChip, 
  PokemonCardChipText, 
  PokemonCardName, 
  PokemonCardTypeContainer, 
  PokemonCardTypeItem, 
  PokemonCardTypeText, 
  PokemonDetailsCardBody,
  PokemonDescriptionText,
  PokemonDetailsCharacteristics,
  PokemonDetailsCharacteristicsText,
  PokemonDetailsStats,
  PokemonDetailsCharacteristicItem
} from "./styles";
import { PokemonStatCard } from "../../components/PokemonStatCard";

const PokemonDetailtScreen: React.FC = () => {
  // Default Hooks
  const theme = useTheme();
  const { width, height } = useWindowDimensions();
  const { params } = useRoute<RouteProp<HomeRouteListStack>>();

  // Pokemon data
  const { pokemon } = params;
  const pokemonColor = pokemon.species?.color?.name;
  const pokemonURI = pokemon?.sprites.other.dream_world.front_default;

  // Animation Styles for details card
  const cardAnimStyle = useAnimatedStyle(() => {
    const opacity = withTiming(pokemon ? 1 : 0, { duration: 500 });
    return { opacity };
  }, [pokemon]);

  // Animation Styles for details header card
  const cardHeaderAnimStyle = useAnimatedStyle(() => {
    const backgroundColor = withTiming(pokemonColor);
    return { backgroundColor }
  }, []);


  // Get the english flavor text
  const pokemonSpecieFlavor = pokemon?.species?.flavor_text_entries?.find(value => value.language.name === "en");

  // Sum all stats to get the total
  const totalOfStats = pokemon.stats.reduce((accumulator, current) => accumulator + current.base_stat, 0);

  return (
    <ScreenComponent>
      <PokemonDetailsCard
      style={[cardAnimStyle]}>
        <PokemonDetailsCardHeader
        style={[cardHeaderAnimStyle]}>
          <PokemonDetailsImageWrapper>
            <SVG
            uri={pokemonURI}
            width={width * 0.25}
            height={width * 0.25}>
            </SVG>
          </PokemonDetailsImageWrapper>
          <PokemonDetailsCardHeaderContent>
            <View style={{ alignItems: "flex-start" }}>
              <PokemonCardChip background="#FFCB05">
                <PokemonCardChipText color={theme.text}>
                  #0{String(pokemon?.order).padStart(2, pokemon?.order < 10 && "0")}
                </PokemonCardChipText>
              </PokemonCardChip>
            </View>
            <PokemonCardName numberOfLines={1}>
              {pokemon?.name}
            </PokemonCardName>
            <PokemonCardTypeContainer>
              {pokemon?.types.map((value, _index) => (
                <PokemonCardTypeItem
                key={value.type.name}
                style={{ marginLeft: _index > 0 ? "3%" : 0 }}>
                  <PokemonCardTypeText>
                    {value.type.name}
                  </PokemonCardTypeText>
                </PokemonCardTypeItem>
              ))}
            </PokemonCardTypeContainer>
          </PokemonDetailsCardHeaderContent>
        </PokemonDetailsCardHeader>
        <PokemonDetailsCardBody>
          <PokemonDescriptionText >
            {pokemonSpecieFlavor?.flavor_text?.replace(/(\r\n|\n|\r)/gm, "")}
          </PokemonDescriptionText>
          <PokemonDetailsCharacteristics>
            <PokemonDetailsCharacteristicItem>
              <PokemonDetailsCharacteristicsText>Weight:</PokemonDetailsCharacteristicsText>
              <PokemonCardChip background={pokemonColor}>
                <PokemonCardChipText color="#fff">
                  {Number(pokemon.weight / 2.2).toFixed(2)}kg
                </PokemonCardChipText>
              </PokemonCardChip>
            </PokemonDetailsCharacteristicItem>
            <PokemonDetailsCharacteristicItem>
              <PokemonDetailsCharacteristicsText>Height:</PokemonDetailsCharacteristicsText>
              <PokemonCardChip background={pokemonColor}>
                <PokemonCardChipText color="#fff">
                  {pokemon.height}m
                </PokemonCardChipText>
              </PokemonCardChip>
            </PokemonDetailsCharacteristicItem>
          </PokemonDetailsCharacteristics>
          <PokemonDetailsStats>
            {pokemon.stats.map((item, index) => (
              <PokemonStatCard
              key={index}
              max_stat={100}
              base_stat={item.base_stat} 
              stat_name={item.stat.name}
              />
            ))}
            <PokemonStatCard
            max_stat={600} 
            stat_name="total" 
            base_stat={totalOfStats} 
            />
          </PokemonDetailsStats>
        </PokemonDetailsCardBody>
      </PokemonDetailsCard>
    </ScreenComponent>
  );
};

export default function() {
  return (
    <PokemonProvider>
      <PokemonDetailtScreen />
    </PokemonProvider>
  );
};