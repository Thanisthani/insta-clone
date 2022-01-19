import React, { useEffect } from 'react'
import { View, Text, SafeAreaView, StyleSheet,StatusBar, ScrollView } from 'react-native'
import Header from '../Components/Home/Header';
import Stories from '../Components/Home/Stories';
import Post from '../Components/Home/Post';
import { POST } from '../data/post';
import BottomTab, { bottomTabIcons } from '../Components/Home/BottomTab';
import { collection, getDocs ,collectionGroup,} from "firebase/firestore";
import {db} from '../firbase'
import { assert } from '@firebase/util';

const Homescreen = ({ navigation }) => {
    useEffect(() => {
        getdata();
        // const querySnapshot = getDocs(collection(db, "customers"));
        // querySnapshot.docs.map(doc => {
        //   // doc.data() is never undefined for query doc snapshots
        //   doc.data()
        // });
    }, [])

    const getdata = async () => {
        const posts = collectionGroup(db, 'post')
        const querySnapshot =await getDocs(posts);
        querySnapshot.docs.map((doc) => {
            console.log(doc.id, ' => ', doc.data());
        });
    }
    
    return (
        <View style={Styles.container}>
            <Header navigation={navigation} />
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
