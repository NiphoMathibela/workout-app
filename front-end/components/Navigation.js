import * as React from "react"
import { StatusBar } from 'expo-status-bar';
import {Text, View} from "react-native"
import { IoBarbellOutline, IoPersonOutline } from "react-icons/io5";

const Navigation = () => {
    return(
        <View className= "h-20 flex items-center">
            <View><Text className= "text-white font-xl">Block</Text></View>
            <View><Text>Block 2</Text></View>
            <View><Text>Block 3</Text></View>
            <StatusBar style="auto" />
        </View> 
    )
}

export default Navigation;

