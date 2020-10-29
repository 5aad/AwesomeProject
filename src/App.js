import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginSignupScreen from './Screens/LoginSignupScreen';
import AddCard from './Screens/AddCard';
import MyWallet from './Screens/MyWallet';
import Stock from './Screens/Stock';
import Search from './Screens/Search';
import Account from './Screens/Account';
import SplashScreen from './Screens/SplashScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginSignupScreen">
        <Stack.Screen name="Login" component={LoginSignupScreen} />
        <Stack.Screen name="MyWallet" component={MyWallet} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Search" component={Search} />

        <Stack.Screen name="AddCard" component={AddCard} />

        <Stack.Screen name="Stock" component={Stock} />
        <Stack.Screen name="Screen" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
