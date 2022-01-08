import React from 'react'
import { View, StyleSheet, StatusBar,Image } from 'react-native'
import LoginForm from '../Components/Login/LoginForm'

const LoginScreen = () => {
    return (
        <View style={Styles.container}>
            <View style={Styles.wrapper}>
                <Image style={Styles.img} source={{ uri: "https://i.pinimg.com/564x/3b/21/c7/3b21c7efd2ba9c119fb8d361acacc31d.jpg" }} />
                
            </View>
            <LoginForm />
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        marginTop: StatusBar.currentHeight, 
        paddingHorizontal:40
    },
    wrapper: {
        alignItems: "center",
        paddingTop:50,
    },
    img: {
        width: 100,
        height: 100,
    
    }
})

export default LoginScreen
