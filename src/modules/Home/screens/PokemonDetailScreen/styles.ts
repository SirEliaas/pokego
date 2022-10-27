import { Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("screen");
export const PokemonDetailsCard = styled(Animated.View)`
  flex: 0.95;
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.secondary};
`;

export const PokemonDetailsCardHeader = styled(Animated.View)`
  flex: 0.25;
  width: 100%;
  padding: 5%;

  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const PokemonDetailsImageWrapper = styled.View`
  width: ${width * 0.3}px;
  height: ${width * 0.3}px;
  border-radius: ${width}px;

  align-items: center;
  justify-content: center;

  background-color: rgba(255, 255, 255, 0.3);
`;

export const PokemonDetailsCardHeaderContent = styled(Animated.View)`
  flex: 0.80;
`;

interface PokemonCardChipProps {
  background: string;
};

export const PokemonCardChip = styled(Animated.View)<PokemonCardChipProps>`
  padding: 2% 13%;
  border-radius: 100px;

  background-color: ${({ background }) => background};
`;

interface PokemonCardChipTextProps {
  color: string;
};

export const PokemonCardChipText = styled.Text<PokemonCardChipTextProps>`
  font-size: 12px;
  font-weight: bold;
  color: ${({ color }) => color};
`;

export const PokemonCardName = styled.Text`
  color: #FFF;
  font-size: 20px;
  font-weight: bold;
  text-transform: capitalize;
`;


export const PokemonCardTypeContainer = styled(Animated.View)`
  width: 100%;
  margin: 3% 0%;
  flex-direction: row;
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

export const PokemonDetailsCardBody = styled(Animated.View)`
  flex: 1;
  width: 100%;
  padding: 5%;
`;

export const PokemonDescriptionText = styled.Text`
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.text};
`;

export const PokemonDetailsCharacteristics = styled(Animated.View)`
  width: 100%;
  margin: 5% 0%;
  flex-direction: row;
  align-self: center;
  align-items: center;
  justify-content: space-around;
`;

export const PokemonDetailsCharacteristicItem = styled(Animated.View)`
  align-items: center;
  justify-content: center;
`;

export const PokemonDetailsCharacteristicsText = styled.Text`
  font-weight: 400;
  font-size: 13px;
  margin-bottom: 3%;
  color: ${({ theme }) => theme.text};
`;

export const PokemonDetailsStats = styled(Animated.ScrollView)`
  width: 100%;
`;