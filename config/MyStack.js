import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import UsineScreen from '../screens/UsineScreen';
import QrScreen from '../screens/QrScreen';
import TableScreen from '../screens/TableScreen';
import PrepaScreen from '../screens/PrepaScreen';

const Stack = createNativeStackNavigator();

const  Navigation = () => {
  return (

      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name="Home"component={HomeScreen}/>
        <Stack.Screen name="Usine"component={UsineScreen}/>
        <Stack.Screen name="Qr"component={QrScreen}/>
        <Stack.Screen name="Table"component={TableScreen}/>
        <Stack.Screen name="Pre"component={PrepaScreen}/>
      </Stack.Navigator>
 
  );
};


export default Navigation