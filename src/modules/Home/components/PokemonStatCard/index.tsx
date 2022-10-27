import React from "react";
import * as Progress from "react-native-progress";

import { PokemonStatCardContainer, PokemonStatCardContent, PokemonStatCardText } from "./styles";

export interface PokemonStatCardProps {
  stat_name: string;
  base_stat: number;
  max_stat: number;
};

export const PokemonStatCard: React.FC<PokemonStatCardProps> = ({ stat_name, base_stat, max_stat }) => {
  const progressColor = base_stat >= (max_stat / 2) ? "#45C0A3" : "#E63950";
  return (
    <PokemonStatCardContainer>
      <PokemonStatCardText>{ stat_name }</PokemonStatCardText>
      <PokemonStatCardContent>
        <PokemonStatCardText>{ base_stat }</PokemonStatCardText>
        <Progress.Bar
        color={progressColor}
        progress={base_stat / max_stat}>
        </Progress.Bar>
      </PokemonStatCardContent>
    </PokemonStatCardContainer>
  );
};