import React from 'react'
import { createSwitchNavigator, createAppContainer } from "react-navigation";


import { LoginContainer, SignUpContainer, SplashScreen, ItemDetail } from "../screens"
import HomeNavigator from './tabs'



const AuthStack = createSwitchNavigator({
    Splash: SplashScreen,
    Login: LoginContainer,
    SignUp: SignUpContainer,
    Home: HomeNavigator, // Home is configure inside the Tab stack
}, {
    initialRouteName: 'Splash'
});

const Navigation = createAppContainer(AuthStack);

export default Navigation;