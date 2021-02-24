import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    ScrollView
} from 'react-native'
import { color } from 'react-native-reanimated';

import { images, icons, COLORS, FONTS, SIZES } from '../constants';

const Bookings = ({ navigation }) => {

    const [tabList, setTabList] = React.useState([
        {
            id: 0,
            name: "Physio",
            title: "chairs",
            productList: [
                {
                    productId: 1,
                    productName: 'Dr. Nelle Careine',
                    price: 11.00,
                    image: images.userOne,
                },
                {
                    productId: 2,
                    productName: 'Dr. Jessica',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 3,
                    productName: 'Chair White Colour',
                    price: 10.00,
                    image: images.whiteChair,
                },
            ]
        },
        {
            id: 1,
            name: "Mental Health",
            title: 'cupboards',
            productList: [
                {
                    productId: 4,
                    productName: 'Product 4',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 5,
                    productName: 'Product 5',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 6,
                    productName: 'Product 6',
                    price: 10.00,
                    image: images.redChair,
                },

            ]
        },
        {
            id: 2,
            name: "Gym Trainer",
            title: 'tables',
            productList: [
                {
                    productId: 7,
                    productName: 'Product 7',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 8,
                    productName: 'Product 8',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 9,
                    productName: 'Product 9',
                    price: 10.00,
                    image: images.redChair,
                },

            ]
        },
    ])

    const [selectedTab, setSelectedTab] = React.useState({
        id: 0,
        name: "Chair",
        title: 'therapist',
        productList: [
            {
                productId: 1,
                productName: 'Chair Green Colour',
                price: 10.00,
                image: images.greenChair,
            },
            {
                productId: 2,
                productName: 'Chair Peach Colour',
                price: 10.00,
                image: images.redChair,
            },
            {
                productId: 3,
                productName: 'Chair White Colour',
                price: 10.00,
                image: images.whiteChair,
            },

        ]
    })

    // Render

    function renderHeader() {
        return (
            <View style={{ paddingHorizontal: SIZES.padding, marginBottom: '5%' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1, alignItems: 'flex-start' }}>
                        <TouchableOpacity
                            onPress={() => console.log("Menu on clicked")}
                        >
                            <Image
                                source={icons.back}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    function renderTitle(title) {
        return (
            <View style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding }}>
                <Text style={{ color: COLORS.black, ...FONTS.h1}}>Bookings</Text>
                <Text style={{ color: COLORS.black, ...FONTS.body1 }}>{title}</Text>
            </View>
        )
    }

    return (
            <SafeAreaView style={styles.container}>
                {renderHeader()}
                {renderTitle('with JUST ONE')}
                <View style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: '20%'}}>
                <Image
                    source={images.noBookingsFound}
                    
                >
                </Image>
                <Text style={{ color: COLORS.black, ...FONTS.body2 }}>Start your first booking</Text>
                <Text style={{ color: '#c2c2c2', ...FONTS.body4 }}>No bookings found</Text>
                </View>

            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        marginBottom: '20%'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    }
})

export default Bookings;