import React, { useEffect } from "react";
import { TouchableOpacity, useWindowDimensions } from "react-native";
import { useTheme } from "styled-components";
import { SvgUri as SVG } from "react-native-svg";
import { useAnimatedStyle, useSharedValue, withDelay, withTiming } from "react-native-reanimated";

import { Pokemon } from "../../models/Pokemon";
import { PokemonCardContainer, PokemonCardContent, PokemonCardCounter, PokemonCardCounterText, PokemonCardImageContainer, PokemonCardName, PokemonCardTypeContainer, PokemonCardTypeItem, PokemonCardTypeText } from "./styles";

interface PokemonCardProps {
  item: Pokemon;
  index: number;
  onPress(item: Pokemon): void;
};

export const PokemonCard: React.FC<PokemonCardProps> = ({ item, index, onPress }) => {
  const theme = useTheme();
  const { width } = useWindowDimensions();
  
  // Animations
  const cardOpacity = useSharedValue(0);
  const cardAnimStyle = useAnimatedStyle(() => {
    const opacity = cardOpacity.value;
    return { opacity };
  }, []);

  useEffect(() => {
    cardOpacity.value = withDelay(index * 100, withTiming(1));
  }, []);

  const uri = item.sprites?.other?.dream_world?.front_default;
  return (
    <TouchableOpacity
    onPress={() => onPress(item)}>
      <PokemonCardContainer
      style={[cardAnimStyle]}
      background={(item?.species?.color?.name) || theme.secondary}>
        <PokemonCardCounter>
          <PokemonCardCounterText>
            #0{String(item.order).padStart(2, item.order < 10 && "0")}
          </PokemonCardCounterText>
        </PokemonCardCounter>
        <PokemonCardImageContainer>
          <SVG 
          uri={uri}
          width={width * 0.25}
          height={width * 0.25}>
          </SVG>
        </PokemonCardImageContainer>
        <PokemonCardContent>
          <PokemonCardName numberOfLines={1}>{item.name}</PokemonCardName>
          <PokemonCardTypeContainer>
            {item.types.map((value, _index) => (
              <PokemonCardTypeItem
              key={value.type.name}
              style={{ marginLeft: _index > 0 ? "3%" : 0 }}>
                <PokemonCardTypeText>
                  {value.type.name}
                </PokemonCardTypeText>
              </PokemonCardTypeItem>
            ))}
          </PokemonCardTypeContainer>
        </PokemonCardContent>
      </PokemonCardContainer>
    </TouchableOpacity>
  );
};