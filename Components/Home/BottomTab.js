import React, { useState } from 'react'
import { View, Text,Image,StyleSheet, TouchableOpacity } from 'react-native'

export const bottomTabIcons = [
    {
        name: 'Home',
        active: require('../../assets/home-active.png'),
        inactive: require('../../assets/home-inactive.png')
    },
    {
        name: 'Search',
        active: require('../../assets/search-active.png'),
        inactive: require('../../assets/search-inactive.png')
    },
    {
        name: 'Reels',
        active: require("../../assets/reel-active.png"),
        inactive: require("../../assets/reel-inactive.png")
    },
    {
        name: 'Shop',
        active: require("../../assets/shop-active.png"),
        inactive: require("../../assets/shop-inactive.png")
    },
    {
        name: 'Profile',
        active: require("../../assets/profilepic.jpg"),
        inactive: require("../../assets/profilepic.jpg")
    },
];

const BottomTab = ({icons }) => {
    const [activeTab, setActiveTab] = useState('Home');

    const Icon = ({ icon }) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image style={[Styles.icon, icon.name == 'Profile' ? Styles.profilpic : null,
            activeTab=='Profile' && icon.name== activeTab ? Styles.profilepicActive : null]}
                source={activeTab == icon.name ? icon.active : icon.inactive} />  
        </TouchableOpacity>
    )
    return (
        <View style={Styles.iconContainer}>
            {
                icons.map((icon, index) => (
                    <Icon key={ index} icon={icon}/>
                ))
            }
           
        </View>
    )
}

const Styles = StyleSheet.create(
    {
        icon:
        {
            width: 30,
            height: 30,
            marginTop:10
        },
        iconContainer: {
            flexDirection: "row",
            justifyContent: "space-around",
            
        },
        profilpic: {
            borderRadius: 50,
            width: 35,
            height: 35,
           
        },
        profilepicActive: {
            borderWidth:  2 ,
            borderColor:"white"
        }
        
    }
)

export default BottomTab
