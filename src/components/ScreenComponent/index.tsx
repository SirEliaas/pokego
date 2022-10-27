import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

import { BodyContent } from "./styles";

type ScreenComponentProps = {
  children: React.ReactNode;
};

export function ScreenComponent({ children }: ScreenComponentProps) {
  return (
    <SafeAreaView
    testID="screen-component"
    style={StyleSheet.absoluteFill}>
      <BodyContent>
        { children }
      </BodyContent>
    </SafeAreaView>
  );
};