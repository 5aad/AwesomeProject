import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginSignupScreen from './Screens/LoginSignupScreen';
import AddCard from './Screens/AddCard';
import MyWallet from './Screens/MyWallet';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginSignupScreen">
        <Stack.Screen name="Login" component={LoginSignupScreen} />
        <Stack.Screen name="AddCard" component={AddCard} />
        <Stack.Screen name="MyWallet" component={MyWallet} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
