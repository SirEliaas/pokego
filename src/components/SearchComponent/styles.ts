import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("screen");
export const SearchContainer = styled.View`
  width: 100%;

  border-width: 1px;
  border-radius: 100px;
  border-color: ${({ theme }) => theme.primary};

  padding: 5px ${width * 0.03}px;

  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
`;

export const SearchContent = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  margin: 0;
  padding: 0;
  margin-left: ${width * 0.02}px;

`;

export const SearchButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;

  border-radius: ${width * 0.06}px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.primary};
`;