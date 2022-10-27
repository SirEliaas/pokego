import React from "react";
import { TextInputProps, Dimensions, ActivityIndicator, Keyboard } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useTheme } from "styled-components";
import { SearchButton, SearchContainer, SearchContent, SearchInput } from "./styles";

export interface SearchComponentProps extends TextInputProps {
  children?: React.ReactNode;

  searching: boolean;
  onSearchSubmit(): void;
};

const { width, height } = Dimensions.get("screen");
export const SearchComponent: React.FC<SearchComponentProps> = ({ onSearchSubmit, searching, ...props }) => {
  const theme = useTheme();

  const handleSubmit = React.useCallback(() => {
    Keyboard.dismiss();
    onSearchSubmit();
  }, [props]);

  return (
    <SearchContainer
    testID="search-component">
      <SearchContent>
        <Icon
        name="search"
        size={width * 0.05}
        color={theme.primary}>
        </Icon>
        <SearchInput
        testID="search-component-input"
        {...props}>
        </SearchInput>
      </SearchContent>
      <SearchButton
      testID="search-component-submit-button"
      onPress={handleSubmit}>
        {searching ? (
          <ActivityIndicator
          testID="search-component-activity-indicator"
          size="small"
          color={theme.background}>
          </ActivityIndicator>
        ) : (
          <Icon
          testID="search-component-submit-icon"
          name="arrow-right"
          color={theme.background}>
          </Icon>
        )}
      </SearchButton>
    </SearchContainer>
  );
};
