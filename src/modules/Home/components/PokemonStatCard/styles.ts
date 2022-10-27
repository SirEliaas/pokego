import styled from "styled-components/native";

export const PokemonStatCardContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PokemonStatCardText = styled.Text`
  font-size: 16px;
  margin-right: 10px;
  font-weight: bold;
  text-transform: capitalize;
  color: ${({ theme }) => theme.text};
`;

export const PokemonStatCardContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;