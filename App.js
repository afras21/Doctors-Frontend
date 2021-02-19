/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

// screens
import { Home, ItemDetail, LoginContainer } from "./screens/";
import  AuthStack  from "./navigation";
import Tabs from './navigation/tabs'
import { createSwitchNavigator, createAppContainer } from "react-navigation";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};

const Stack = createStackNavigator();
const Navigation = createAppContainer(AuthStack);


const App = () => {
    return (
        <NavigationContainer theme={theme}>
            <Navigation/>
            {/* <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Auth'}
            >
                <Stack.Screen name="Auth" component={AuthStack} />
                <Stack.Screen name="Home" component={Tabs} />
                <Stack.Screen name="ItemDetail" component={ItemDetail} />
            </Stack.Navigator> */}
        </NavigationContainer>
    );
};


export default () => {
    return <App />;
};
