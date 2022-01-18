
import { StyleSheet, Text, View } from 'react-native';
import AuthNavigation from './AuthNavigation';
import AddnewpostScreen from './Screen/AddnewpostScreen';
import Homescreen from './Screen/Homescreen';
import  { SignedInStack, SignedOutStack } from './Screen/Navigation';

export default function App() {
  return (
    // <SignedOutStack />
    <AuthNavigation />
      // <SignedInStack />
    // <Homescreen />
  
  );
}


