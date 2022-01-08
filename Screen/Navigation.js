import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Homescreen from './Homescreen';
import AddnewpostScreen from './AddnewpostScreen';

const Stack = createNativeStackNavigator()


const SignedInStack = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='HomeScreen'
            screenOptions={{
                headerShown: false
              }}>
            <Stack.Screen name="HomeScreen" component={Homescreen} />
            <Stack.Screen name="AddnewpostScreen" component={AddnewpostScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default SignedInStack
