import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import { SearchComponent } from "@source/components/SearchComponent";
import { ThemeProvider } from "styled-components";
import { light } from "@source/theme";
import { NavigationContainer } from "@react-navigation/native";

const ComponentProvider = ({ 
  searching = false, 
  onSearchSubmit = () => {},
  ...props
}) => {
  return (
    <ThemeProvider theme={light}>
      <NavigationContainer>
       <SearchComponent
       {...props}
       searching={searching}
       onSearchSubmit={onSearchSubmit}>
       </SearchComponent>
      </NavigationContainer> 
    </ThemeProvider>
  );
};

describe("SearchComponent", () => {
  it("should render component", () => {
    const { getByTestId } = render(<ComponentProvider  />);
    expect(getByTestId("search-component"));
  });

  it("should write on input", async () => {
    const MockComponent = () => {
      const [value, setValue] = React.useState("");
      const onChangeText = React.useCallback((text: string) => {
        setValue(text);
      }, [value]);

      return (
        <ComponentProvider value={value} onChangeText={onChangeText} />
      );
    };

    const { getByTestId } = render(<MockComponent />);
    const input = getByTestId("search-component-input");

    fireEvent.changeText(input, "charmander");
    expect(input.props.value).toEqual("charmander");
  });

  it("should show the searching activity indicator", () => {
    const { getByTestId } = render(<ComponentProvider searching={true} />);
    expect(getByTestId("search-component-activity-indicator")).toBeVisible();
  });

  it("should show submit icon", () => {
    const { getByTestId } = render(<ComponentProvider searching={false} />);
    expect(getByTestId("search-component-submit-icon")).toBeVisible();
  });

  it("should write and submit", () => {
    const onSubmit = jest.fn();
    const MockComponent = () => {
      const [value, setValue] = React.useState("");
      const onChangeText = React.useCallback((text: string) => {
        setValue(text);
      }, [value]);

      return (
        <ComponentProvider 
        value={value} 
        onChangeText={onChangeText}
        onSearchSubmit={() => onSubmit(value)}
        />
      );
    };

    const { getByTestId } = render(<MockComponent />);
    const input = getByTestId("search-component-input");
    const submit = getByTestId("search-component-submit-button");

    fireEvent.changeText(input, "charizard");
    fireEvent.press(submit);

    expect(onSubmit).toBeCalledWith("charizard");
  });
});