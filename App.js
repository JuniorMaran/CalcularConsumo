import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import Calcular from './src/pages/Calcular'
import Home from './src/pages/Home'
import { createStackNavigator } from '@react-navigation/stack'
import { CardStyleInterpolators } from '@react-navigation/stack'

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Calcular" >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerStyle: {
              backgroundColor: '#0078D4',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerShown: true,
            title: "CONSUMO DO VEÍCULO",
            headerTitleAlign: "center",
            headerLeft: null,
            
          }}
        />
        <Stack.Screen
          name="Calcular"
          component={Calcular}
          options={{
            headerShown: false
          }}

        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}


