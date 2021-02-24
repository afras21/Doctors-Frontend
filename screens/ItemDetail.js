import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native'
import { COLORS, SIZES, icons, FONTS, images } from '../constants';
import { WebView } from "react-native-webview";
import Modal from "../components/Modal";

const ItemDetail = ({ route, navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    function renderHeader() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding * 2,
                    marginHorizontal: SIZES.padding,
                }}
            >
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1, alignItems: 'flex-start' }}>
                        <TouchableOpacity
                            onPress={() => console.log('Menu on clicked')}
                        >
                            <Image
                                source={icons.menu}
                                resizeMode="contain"
                                style={{
                                    tintColor: COLORS.white,
                                    width: 25,
                                    height: 25
                                }}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <TouchableOpacity
                            onPress={() => console.log('Search on clicked')}
                        >
                            <Image
                                source={icons.search}
                                resizeMode="contain"
                                style={{
                                    tintColor: COLORS.white,
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

    function renderInfo() {
        let { itemInfo } = route.params;

        if (itemInfo) {
            return (
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        source={images.greenChair}
                        resizeMode="cover"
                        style={{ width: 300, height: 300 }}
                    />
                    <Text style={{ color: COLORS.black, ...FONTS.h2 , marginTop: '5%'}}>Dr. Nelle Craine</Text>
                    <Text style={{ color: '#c2c2c2', ...FONTS.body3 }}>mental therapist</Text>
                </View>

            )
        } else {
            <View></View>
        }

    }

    function renderFooter() {
        return (
            <TouchableOpacity
            onPress = {() => {_hideModal(modalVisible, setModalVisible)}}
                style={{
                    position: 'absolute',
                    bottom: '5%',
                    left: SIZES.padding * 7,
                    right: SIZES.padding * 7,
                    height: 50,
                    backgroundColor: '#4B9973',
                    borderRadius: 35
                }}
            >
                <Text style={{textAlign: 'center', position: 'relative', marginTop: 12, color: COLORS.white, ...FONTS.body3}}>Book Appointment</Text>
        </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            {renderHeader()}
            {renderInfo()}
            {/* {renderWebView(modalVisible, setModalVisible)} */}
            {renderFooter()}
        </SafeAreaView>
    )
}

const renderWebView = (modalVisible, setModalVisible) => {
    return(
        <View>
            <Modal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
        </View>
    )
}

function _hideModal (modalVisible, setModalVisible) {
    setModalVisible(!modalVisible)
}

export default ItemDetail;