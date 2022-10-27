import React from "react";
import { render } from "@testing-library/react-native";
import mockSafeAreaContext from "react-native-safe-area-context/jest/mock";
import { View } from "react-native";

import { ScreenComponent } from "@source/components/ScreenComponent";

jest.mock("react-native-safe-area-context", () => mockSafeAreaContext);

describe("ScreenComponent", () => {
  it("should render component without a children", () => {
    const component = (
      <ScreenComponent>
      </ScreenComponent>
    );

    const { getByTestId } = render(component);
    expect(getByTestId("screen-component")).toBeTruthy();
  });

  it("should render component with a children", () => {
    const idChildrenComponent = "screen-component-children";
    const component = (
      <ScreenComponent>
        <View testID={idChildrenComponent} />
      </ScreenComponent>
    );

    const { getByTestId } = render(component);  
    expect(getByTestId(idChildrenComponent)).toBeTruthy();
  });
});