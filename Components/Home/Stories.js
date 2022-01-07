import React from 'react'
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import { USERS } from '../../data/user'

const Stories = () => {
    return (
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {USERS.map((user, index) => (
                <View key={index} style={Styles.map} >
                    <Image source={{ uri: user.image }} style={Styles.img} />
                    <Text style={Styles.name}>{ user.user.length > 8 ? user.user.slice(0,7)+".." : user.user}</Text>
                    </View>
            ))}
            </ScrollView>
            </View>
        
    )
}

const Styles = StyleSheet.create({
    img: {
        width: 80,
        height: 80,
        borderRadius: 50,
        marginRight: 10,
        marginLeft:10,
        borderWidth: 3,
      borderColor:"#ff8501"
    },
    name: {
        color: "white",
        
    },
    map: {
        alignItems:"center"
    }
})
export default Stories;
