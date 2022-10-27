import React from 'react';
import {AppRegistry, StyleSheet} from 'react-native';
import { GestureHandlerRootView } from "react-native-gesture-handler";

import {name as appName} from './app.json';
import { ThemeProvider } from "styled-components";
import { Application } from "@source/Application";
import { light } from '@source/theme';

const Bootstrap = () => {
  return (
    <GestureHandlerRootView
    style={StyleSheet.absoluteFill}>
      <ThemeProvider theme={light}>
        <Application />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

AppRegistry.registerComponent(appName, () => Bootstrap);
