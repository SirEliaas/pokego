import React from "react";
import { render } from "@testing-library/react-native";
import { ScreenHeader } from "@source/components/ScreenHeader";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";
import { light } from "@source/theme";

const component = (
  <ThemeProvider theme={light}>
    <NavigationContainer>
      <ScreenHeader /> 
    </NavigationContainer>
  </ThemeProvider>
);

describe("ScreenHeader", () => {
  it("should render the component", () => {
    const { getByTestId } = render(component);
    expect(getByTestId("screen-header")).toBeTruthy();
  });

  it("should verify if app image is showing", () => {
    const { getByTestId } = render(component);
    expect(getByTestId("screen-header-image")).toBeTruthy();
  });

  it("should verify if header color is primary color", () => {
    const { getByTestId } = render(component);
    const element = getByTestId("screen-header");

    expect(element.props.backgroundColor).toEqual(light.primary);
  });
});