import React from 'react'
import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native'
import FormikFormSubmit from './FormikFormSubmit'

const AddNewPost = ({navigation}) => {
    return (
        <View style={Styles.container}>
            <Header navigation={navigation}/>
            <FormikFormSubmit navigation={navigation}/>
        </View>
    )
}

const Header = ({navigation}) => (
    <View style={Styles.headerWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={ Styles.arrow}source={require("../../assets/leftarrow.png")} />
        </TouchableOpacity>
        <Text style={Styles.header}>NEW POST</Text>
        <Text></Text>
    </View>
)

const Styles = StyleSheet.create(
    {
        container: {
            marginVertical: 10,
            marginHorizontal:10
        },
        headerWrapper: {
            flexDirection: "row",
            justifyContent:"space-between"
        },
        header: {
            fontSize: 20,
            color: "white",
            fontWeight:"700"
        },
        arrow: {
            width: 25,
            height: 25,
            transform:[{rotate:'90deg'}]
        }
    }
)

export default AddNewPost
