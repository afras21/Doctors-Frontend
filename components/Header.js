import React from 'react'
import { StatusBar, View, Image, SafeAreaView , Text, AsyncStorage } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { icons } from "../constants";
// const signOutIcon = <FontAwesome5 name={'sign-out-alt'} size={18} color="#000000" />;


export default header = props => {
    const {navigation, showLogout, backButton} = props;
    return (
        <View>
            <StatusBar />
            <SafeAreaView>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: RFValue(10)}}>
                    {
                        backButton &&
                        <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
                            <Image source={icons.back} style={{ height: 25, width: 25 }}></Image>
                        </TouchableOpacity>
                    }
            <TouchableOpacity onPress={() => handleLogout(navigation)}>
            </TouchableOpacity>
            </View>

            </SafeAreaView>
        </View>

    )
}

const handleLogout = async (navigation) => {
    await AsyncStorage.removeItem('token');
    navigation.navigate('Login');
}