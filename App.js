import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/Screens/HomeScreen';
import DetailsScreen from './src/Screens/DetailsScreen';
//import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createNativeStackNavigator();
//const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
    {/* <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Details" component={DetailsScreen} />
      </Drawer.Navigator> */}

      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTintStyle: {
          fortWeight: "bold"
        }
      }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title: 'Home Page'
        }}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;