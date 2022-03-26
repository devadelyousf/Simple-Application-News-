import React from 'react';
import { WebView } from 'react-native-webview';
import { View } from 'react-native';


export default class Google extends React.Component {
    render() {
        return (

            <View style={{flex:1}}>
                <WebView source={{ uri: 'https://www.google.com/' }}
                    style={{ marginTop: 40, width: 410, height: 300 }} />
            </View>

        )
    }
}
