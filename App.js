import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen1 from './views/Screen1';
import Screen2 from './views/Screen2';
import {Styles} from './views/Styles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Screen1' >
        <Stack.Screen name='Screen1' component={Screen1}
        options={{
          headerShown:false,
        }}
         ></Stack.Screen>
        <Stack.Screen name='Screen2' component={Screen2} 
        options={{
          headerShown:false,
        }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}