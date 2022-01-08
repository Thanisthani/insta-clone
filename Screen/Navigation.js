import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Homescreen from './Homescreen';
import AddnewpostScreen from './AddnewpostScreen';
import LoginScreen from './LoginScreen';

const Stack = createNativeStackNavigator()


const SignedInStack = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='LoginScreen'
            screenOptions={{
                headerShown: false
              }}>
            <Stack.Screen name="HomeScreen" component={Homescreen} />
            <Stack.Screen name="AddnewpostScreen" component={AddnewpostScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default SignedInStack
