import React from 'react'
import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native'


const Header = ({navigation}) => {
    return (
        <View style={Styles.container}>
            
            <TouchableOpacity>
            <Image style={Styles.logo} source={require('../../assets/logo.png')} />
            </TouchableOpacity>
            <View style={Styles.iconContainer}>
            <TouchableOpacity onPress={() => navigation.push('AddnewpostScreen')}>
                <Image style={Styles.icon} source={require('../../assets/plus.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                <Image style={Styles.icon} source={require('../../assets/Heart.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                <Image style={Styles.icon} source={require('../../assets/sendarrow.png')} />
                <Text style={Styles.notification}>11</Text>
                </TouchableOpacity>
                
            </View>
        </View>
        
    )
}

const Styles = StyleSheet.create({
    container: {
        paddingTop: 0,
        marginTop: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center"
    },
    logo: {
        width: 150,
        height:70,
        resizeMode:"contain"
        
    },
    iconContainer: {
        
        flexDirection: "row",
        alignItems: "center",
        paddingTop:0
        
    },
    icon: {
        width: 30,
        height:30,
        resizeMode: "contain",
        marginRight:20
    },
    notification: {
        color: "white",
        backgroundColor: '#ff3250',
        position: "absolute",
        zIndex: 100,
        right: 20,
        top: -5,
        alignItems: "flex-start",
        fontSize: 13,
   }
}
);

export default Header
