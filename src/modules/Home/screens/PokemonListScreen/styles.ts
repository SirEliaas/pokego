import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");
export const ScreenTitle = styled.Text`
  font-weight: bold;
  font-size: ${width * 0.06}px;
  color: ${({ theme }) => theme.text};
`;

export const ScreenContent = styled.View`
  width: 100%;
  margin-top: 5%;
`;