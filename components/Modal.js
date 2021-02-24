import React, { useState } from "react";
import { Alert, StyleSheet, Text, Pressable, View, SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";
import  Modal  from "react-native-modal";


const calendlyModal = (modalVisible, setModalVisible) => {
    const htmlData = `
                <html>
            <div class="calendly-inline-widget" data-url="https://calendly.com/afras21/15min" style="position: relative;overflow-y:auto;-webkit-overflow-scrolling:touch;margin-left: 0%;width: 100%;height: 100%;"></div>
                <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
            </html>`
    return (
        <SafeAreaView>
            <Modal 
            isVisible={modalVisible }
            onBackdropPress={ () => {
                setModalVisible(false)}}
            >
                <WebView
                    style={{ flex: 1, marginTop: '20%' }} //handle when no internet
                    automaticallyAdjustContentInsets={false} // handle for other error conditions
                    source={{ html: htmlData }}
                    domStorageEnabled={true}
                    javaScriptEnabled={true}
                />
            </Modal>
        </SafeAreaView>
    );
};

export default calendlyModal;