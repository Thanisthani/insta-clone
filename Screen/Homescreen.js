import React from 'react'
import { View, Text, SafeAreaView, StyleSheet,StatusBar, ScrollView } from 'react-native'
import Header from '../Components/Home/Header';
import Stories from '../Components/Home/Stories';
import Post from '../Components/Home/Post';
import { POST } from '../data/post';
import  BottomTab,{ bottomTabIcons } from '../Components/Home/BottomTab';

const Homescreen = () => {
    return (
        <View style={Styles.container}>
            <Header />
            <Stories />
            <ScrollView>
                {POST.map((post, index) => (
                    <Post key={ index} post={post}/> 
                ))}
                
            </ScrollView>
            <BottomTab icons={bottomTabIcons} />
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
