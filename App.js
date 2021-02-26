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

import configureStore from "./redux/store/configureStore";
import { Provider } from 'react-redux';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};


const App = () => {
    return (
        <Provider store={configureStore()}>
        <NavigationContainer theme={theme}>
            <Navigation/>
        </NavigationContainer>
        </Provider>

    );
};


export default () => {
    return <App/>
};
