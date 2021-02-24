/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import Navigation from './navigation/tabs'

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};


const App = () => {
    return (
        <NavigationContainer theme={theme}>
            <Navigation/>
        </NavigationContainer>
    );
};


export default () => {
    return <App />;
};
