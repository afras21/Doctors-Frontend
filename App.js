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

import {store, persistor} from "./redux/store/configureStore";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'


const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};


const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer theme={theme}>
                    <Navigation />
                </NavigationContainer>
            </PersistGate>
        </Provider>

    );
};


export default () => {
    return <App/>
};
