/**
 * LoginContainer
 */
import React from 'react';
import { Text, View, TextInput, TouchableOpacity, SafeAreaView, StyleSheet, AsyncStorage, BackHandler } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { withNavigation } from "react-navigation";
import {login} from '../../services/authService'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { COLORS } from '../../constants';
class LoginContainer extends React.Component {

    state = {
        email: '',
        password: ''
    }

    async login() {
        const userData = await login(this.state);
        if(userData.isAuth) {
            console.log(userData);
            this.setUserToken(userData);
            alert('LoggedIn Successfully')
        } else {
            alert('Login Failed')
        }
        console.log(userData);
    }

    setUserToken = async (data) => {
        await AsyncStorage.setItem('token', data.token);
        await AsyncStorage.setItem('userData', JSON.stringify(data));
        this.props.navigation.navigate('Tabs');
    }

    onChangeText = (key, val) => {
        this.setState({ [key]: val });
    };

    render = () => {
        return (
            <SafeAreaView>
                <View style={styles.root}>
                    <Text style={styles.loginText}>Login to</Text>
                    <Text style={styles.loginText}>Just One</Text>

                    <View style={styles.loginFormStyle}>
                        <TextInput onChangeText={(val) => this.onChangeText('email', val)} style={styles.placeholderStyles} placeholder={'Enter your email'}></TextInput>
                        <TextInput onChangeText={(val) => this.onChangeText('password', val)} style={styles.placeholderStyles} placeholder={'Password'} secureTextEntry={true}></TextInput>
                    </View>

                    <TouchableOpacity 
                    style={styles.loginButton}
                    onPress={() => {this.login()}}
                    >
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.forgotPwdText}>Are you new to Just One?</Text>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate("SignUp")}}>
                            <Text style={[styles.forgotPwdText, styles.signUpText]}>Signup now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    loginText: {
        fontSize: RFValue(40),
        fontWeight: 'bold',
        color: COLORS.primary
    },
    root: {
        padding: RFValue(20),
        marginTop: RFValue(60)
    },
    placeholderStyles: {
        fontSize: RFValue(15),
        padding: RFValue(15),
        marginTop: '5%',
        backgroundColor: '#ffffff',
        borderRadius: 20,
        fontWeight: '300',
    },
    loginFormStyle: {
        marginTop: RFValue(40)
    },
    loginButton: {
        width: wp(90),
        height: wp(10),
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: RFValue(20),
        borderRadius: 20
    },
    loginButtonText: {
        color: '#ffffff',
        fontWeight: '600',
        fontSize: RFValue(15)
    },
    forgotPwdText: {
        marginTop: RFValue(10)
    },
    signUpText: {
        color: '#002c73',
        marginLeft: RFValue(10),
        fontWeight: '600'
    }
})

export default withNavigation(LoginContainer)
