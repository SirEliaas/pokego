import React from "react";
import { Image, StatusBar, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import Icon from "react-native-vector-icons/FontAwesome5";

import { HeaderContainer, HeaderContent } from "./styles";

export function ScreenHeader () {
  const theme = useTheme();
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  const goBackButtonOpacity = useSharedValue(0);
  const goBackButtonAnimStyle = useAnimatedStyle(() => {
    return { opacity: goBackButtonOpacity.value };
  }, []);

  const handleGoBack = React.useCallback(() => {
    const isPossibleGoBack = navigation.canGoBack();
    isPossibleGoBack && navigation.goBack();
  }, [navigation]);

  React.useEffect(() => {
    navigation.addListener("state", ({ target }) => {
      const isPossibleGoBack = navigation.canGoBack();  
      goBackButtonOpacity.value = withTiming(isPossibleGoBack ? 1 : 0);
    });

    return () => navigation.removeListener("state", null);
  }, []);
  
  return (
    <HeaderContainer
    testID="screen-header"
    backgroundColor={theme.primary}>
      <StatusBar backgroundColor={theme.primary} barStyle="light-content" />
      <TouchableOpacity
      onPress={handleGoBack}>
        <Animated.View
        style={[goBackButtonAnimStyle]}>
          <Icon
          size={width * 0.05}
          name="long-arrow-alt-left"
          color={theme.background}>
          </Icon>
        </Animated.View>
      </TouchableOpacity>
      <HeaderContent>
        <Image
        testID="screen-header-image"
        source={require("@images/pokemon_logo.png")}
        />
      </HeaderContent>
    </HeaderContainer>
  );
};