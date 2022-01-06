import React from 'react'
import { View, Text, SafeAreaView, StyleSheet,StatusBar } from 'react-native'
import Header from '../Components/Home/Header';

const Homescreen = () => {
    return (
        <View style={Styles.container}>
            <Header/>
        </View>
    )
}
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight, 
        paddingTop: 0,
        justifyContent: "flex-start",
        backgroundColor:"black"
}
});
export default Homescreen
