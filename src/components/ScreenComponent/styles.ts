import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

export const BodyContent = styled.View`
  flex: 1;
  width: 100%;
  padding: ${width * 0.05}px;

  background-color: ${({ theme }) => theme.background};
`;