import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import firstPage from './screens/FirstPage';
import secondPage from './screens/SecondPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName = 'firstPage'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#F67280',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
        name="firstPage" 
        component={firstPage} 
        options={{title: 'Fisrt Page'}}
        />
        <Stack.Screen 
        name="secondPage" 
        component={secondPage} 
        options={{title: 'Second Page'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App