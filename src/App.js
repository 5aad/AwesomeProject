import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginSignupScreen from './Screens/LoginSignupScreen';
import AddCard from './Screens/AddCard';
import Stock from './Screens/Stock';

import SplashScreen from './Screens/SplashScreen';
import TabNav from './TabNav';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginSignupScreen">
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={LoginSignupScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="TabNav"
          component={TabNav}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Stock"
          component={Stock}
        />

        <Stack.Screen
          name="AddCard"
          component={AddCard}
          options={{
            title: 'Add Card',
            headerTitleStyle: {alignSelf: 'center', marginLeft: -35},
          }}
        />
        <Stack.Screen name="Screen" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
