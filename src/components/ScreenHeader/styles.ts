import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

interface HeaderContainerProps {
  backgroundColor: string;
};

export const HeaderContainer = styled.View<HeaderContainerProps>`
  width: 100%;
  height: ${height * 0.1}px;
  padding: 0px ${width * 0.05}px;
  border-bottom-left-radius: ${width * 0.05}px;
  border-bottom-right-radius: ${width * 0.05}px;
  background-color: ${({ backgroundColor }) => backgroundColor};

  flex-direction: row;
  align-items: center;
`;

export const HeaderContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;