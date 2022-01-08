import React from 'react'
import { View, StyleSheet,StatusBar } from 'react-native'
import AddNewPost from '../Components/Newpost/AddNewPost'

const AddnewpostScreen = () => {
    return (
        <View style={Styles.container}>
            <AddNewPost />
        </View>
    )
}

const Styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            marginTop: StatusBar.currentHeight, 
            paddingTop: 0,
            justifyContent: "flex-start",
            backgroundColor:"black"
    }
    }
    
)

export default AddnewpostScreen
