import React from 'react';
import { View, Text, Image ,ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Splash extends React.Component {
    
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#eee", alignItems: "center", justifyContent: "center" }}>
                <Image source={require('../imgs/elon.jpg')} style={{ width: 100, height: 100, borderRadius: 100 }} />
                <Text style={{fontWeight:"bold" , padding:10 , fontSize:20}}>Hello Elon Musk</Text>
                <ActivityIndicator size="small" color="#09c" />
                {this.moveHome()}
            </View>
        )
    }

    moveHome(){
        AsyncStorage.getItem("visited").then( (value)=>{
            if(value){
                setTimeout(() => {
                    this.props.navigation.navigate('Home')
                }, 1500);
            } else{
                setTimeout(() => {
                    this.props.navigation.navigate('About')
                }, 2500); 
            }
        })
    }
    
}