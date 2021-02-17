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

const ScrollableTab = ({ tabList, selectedTab, onPress }) => {

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={{ marginHorizontal: SIZES.padding }}
            onPress={() => onPress(item)}
        >
            <Text style={{ color: COLORS.secondary, ...FONTS.body2 }}>{item.name}</Text>

            {
                selectedTab.id == item.id &&
                <View style={{ alignItems: 'center', marginTop: SIZES.base }}>
                    <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: COLORS.blue }}></View>
                </View>
            }
        </TouchableOpacity>
    );

    return (
        <View style={{ marginTop: SIZES.padding }}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={tabList}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}
            />
        </View>
    )
}

const ScrollableCard = ({ navigation, productList }) => {

    const renderCard = ({ item }) => (
        <TouchableOpacity
            style={{ marginLeft: SIZES.padding }}
            onPress={() => navigation.navigate("ItemDetail", { "itemInfo": item })}
        >
            <View style={{ width: SIZES.width / 1.7,  borderRadius: SIZES.radius * 1, backgroundColor: COLORS.white }}>
                <Image
                    source={item.image}
                    resizeMode="cover"
                    style={{ width: '100%', height: '70%'}}
                />
                <View style={{ position: 'absolute', bottom: 20, left: 15, borderRadius: 15, paddingVertical: 30, paddingHorizontal: 15, backgroundColor: COLORS.transparentLightGray }}>
                    <Text style={{ ...FONTS.h4 }}> {item.productName}</Text>
                </View>
                <View style={{ position: 'absolute', bottom: -5, left: 15, borderRadius: 15, paddingVertical: 30, paddingHorizontal: 15, backgroundColor: COLORS.transparentLightGray }}>
                    <Text style={{ ...FONTS.body3, color: '#c2c2c2' }}> {'mental therapist'}</Text>
                </View>
            </View>
        </TouchableOpacity>
        
    )

    return (
        <View style={{ marginTop: SIZES.padding }}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={productList}
                renderItem={renderCard}
                keyExtractor={item => `${item.productId}`}
            />
        </View>
    )
}

const Home = ({ navigation }) => {

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

                    {/* <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <TouchableOpacity
                            onPress={() => { console.log("Cart on clicked") }}
                        >
                            <Image
                                source={icons.cart}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25
                                }}
                            />
                        </TouchableOpacity>
                    </View> */}
                </View>
            </View>
        )
    }

    function renderTitle(title) {
        return (
            <View style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding }}>
                <Text style={{ color: COLORS.black, ...FONTS.h1}}>Find your therapist</Text>
                <Text style={{ color: COLORS.black, ...FONTS.body1 }}>{title}</Text>
            </View>
        )
    }

    function renderRecommended(productList) {
        return(
            <ScrollView style={{position: 'absolute', marginTop: 570, height: '30%'}}>
            <FlatList
                vertical
                showsVerticalScrollIndicator={false}
                data={productList}
                renderItem={() => {
                    return(
                        <TouchableOpacity 
                        style={{ marginLeft: SIZES.padding * 3, flexDirection: 'row', backgroundColor: COLORS.white, padding: '2%', borderRadius: 15, marginBottom: '5%' }}
                        >
                            <Image
                                source={images.greenChair}
                                resizeMode="cover"
                                style={{ width: 80, height: 80 }}
                            />
                            <View style={{padding: '5%'}}>
                                <Text style={{color: COLORS.black, ...FONTS.h4}}>Dr. Nelle Craine</Text>
                                <Text style={{color: '#c2c2c2', ...FONTS.body4}}>mental therapist</Text>
                                <View style={{flexDirection: 'row'}}>
                                <Image
                                source={icons.star}
                                resizeMode="cover"
                                style={{ width: 15, height: 15, marginRight: '5%' }}
                            />
                            <Text>5.0</Text>
                                </View>
                            </View>
                            <View>
                            <Image
                                source={icons.chat}
                                // resizeMode=""
                                style={{ width: 20, height: 20, marginLeft: '22%', marginTop: 15, marginBottom: 10 }}
                            />
                            <Image
                                source={icons.phone}
                                // resizeMode=""
                                style={{ width: 20, height: 20, marginLeft: '22%', marginTop: 10 }}
                            />
                            </View>
                        </TouchableOpacity>
                    )   
                }}
                keyExtractor={item => `${item.productId}`}
            />
            </ScrollView>
        )
    }

    return (
            <SafeAreaView style={styles.container}>
                {renderHeader()}
                {renderTitle('with JUST ONE')}

                <ScrollableTab
                    tabList={tabList}
                    selectedTab={selectedTab}
                    onPress={(item) => setSelectedTab(item)}
                />

                <View>
                    <ScrollableCard
                        navigation={navigation}
                        productList={selectedTab.productList}
                    />
                    <Text style={{position: 'absolute', marginTop: 300, marginLeft: '7%', color: COLORS.black, ...FONTS.body2}}>Recommended</Text>
                </View>
                {renderRecommended(selectedTab.productList)}
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: COLORS.lightGray4
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

export default Home;