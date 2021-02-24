import React from 'react';
import { AsyncStorage } from "@react-native-community/async-storage";
import { View, TouchableOpacity, Text, SafeAreaView, FlatList, Image } from "react-native";
import { icons, COLORS, images } from "../constants";

const listViewProps = [
    {
        name: "Personal Information",
        icon: icons.personal
    },
    {
        name: "Courses",
        icon: icons.courses
    },
    {
        name: "Payments",
        icon: icons.wallet
    },
    {
        name: "Privacy Policy",
        icon: icons.wallet
    }
]

const ProfileContainer = ({ navigation }) => {

    return (
        <SafeAreaView style={{ backgroundColor: '#fAfAfA' }}>
            {renderProfileImage()}
            {renderProfileList()}
            {/* {renderLogoutButton(navigation)} */}
        </SafeAreaView>
    )
}

const renderProfileImage = () => {
    return (
        <View>
            <View style={{ height: 300, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <View>
                <Text>128</Text>
                <Text>Steps</Text>
                </View>
                <Image source={images.userprofile} style={{ height: 180, width: 180, borderTopLeftRadius: 70, borderTopRightRadius: 30, borderBottomLeftRadius: 80, borderBottomRightRadius: 80 }} />
                <View>
                <Text>12</Text>
                <Text>Courses</Text>
                </View>
            </View>
            <Text>Profile</Text>

        </View>

    )
}

const renderProfileList = () => {
    return (
        <FlatList
            data={listViewProps}
            renderItem={renderCard}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => `${item.name}`}
            style={{ height: '57%' }}
        />
    )
}

const renderCard = ({ item }) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center', marginLeft: '5%', marginRight: '5%', marginTop: '5%',
                flexDirection: 'row', justifyContent: 'space-between', borderRadius: 15
            }}>
            <View style={{ backgroundColor: '#0000', heightL: 10, width: 10, padding: '5%' }}>
                <Image
                    source={item.icon}
                    style={{ height: 50, width: 50 }}
                />
            </View>
            <Text style={{ position: 'absolute', marginLeft: '25%' }}>{item.name}</Text>
            <Image
                source={icons.back}
                style={{ height: 20, width: 20, transform: [{ rotateY: '180deg' }], marginRight: '10%' }}
            />
        </TouchableOpacity>
    )
}

const renderLogoutButton = (navigation) => {
    return (
        <TouchableOpacity
            onPress={() => { navigation.replace("Login") }}
            style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#4B9973', padding: '1%', margin: '15%', borderRadius: 100, position: 'absolute' }}>
            <Text style={{ textAlign: 'center', color: '#ffffff', fontWeight: 'bold' }}>L</Text>
        </TouchableOpacity>
    )
}


export default ProfileContainer;