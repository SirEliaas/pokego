import Animated from "react-native-reanimated";
import styled from "styled-components/native";

interface PokemonCardContainerProps {
  background: string;
};

export const PokemonCardContainer = styled(Animated.View)<PokemonCardContainerProps>`
  width: 95%;
  height: 93%;
  margin: 5.5% 0%;
  padding: 10% 5%;
  border-radius: 15px;

  align-self: center;
  align-items: center;
  justify-content: space-between;

  overflow: visible;
  position: relative;

  background-color: ${({ background }) => background};
`;

export const PokemonCardCounter = styled(Animated.View)`
  height: 12%;
  padding: 0% 10%;
  border-radius: 100px;

  align-self: center;
  align-items: center;
  justify-content: center;

  top: -5.5%;
  position: absolute;

  background-color: #FFCB05;
`;

export const PokemonCardCounterText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

export const PokemonCardImageContainer = styled(Animated.View)`
  width: 60%;
  height: 50%;
  border-radius: 100px;

  align-items: center;
  justify-content: center;

  background-color: rgba(255, 255, 255, 0.35);
`;

export const PokemonCardContent = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const PokemonCardName = styled.Text`
  color: #FFF;
  font-size: 18px;
  font-weight: bold;
  text-transform: capitalize;
`;

export const PokemonCardTypeContainer = styled(Animated.View)`
  width: 100%;
  margin: 3% 0%;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PokemonCardTypeItem = styled(Animated.View)`
  padding: 3% 10%;
  border-radius: 100px;

  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.1);
`;

export const PokemonCardTypeText = styled.Text`
  color: #fff;
  font-size: 10px;
  font-weight: 400;
  text-transform: capitalize;
`;