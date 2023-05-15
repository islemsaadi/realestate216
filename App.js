import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './core/themes'

import {
  
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  dashboard,
  Home,
  Searchh,
  Details,
  Formulaire,
  NewPasswordScreen
 
} from './pages'

import Tabs from './navigation/tabs'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          // screenOptions={{
          //   headerShown: false,
          // }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="dashboard" component={dashboard} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
          <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />

          <Stack.Screen name="Home" component={Tabs} />
          <Stack.Screen name="Searchh" component={Searchh} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Formulaire" component={Formulaire} />


          
          
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}