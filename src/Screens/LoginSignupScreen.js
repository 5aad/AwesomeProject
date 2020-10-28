import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  ScrollView,
} from 'react-native';

import Button from '../Components/Button';

const styles = StyleSheet.create({
  keybd: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 18,
  },
  loginText: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  },

  labelText: {
    marginTop: 14,
    fontSize: 18,
    color: '#C4CACC',
  },

  inputText: {
    borderColor: '#C4C4C4',
    borderBottomWidth: 1,
  },
  orText: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const LoginSignupScreen = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={styles.keybd}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={{backgroundColor: '#fff'}}>
          <SafeAreaView style={styles.container}>
            <Text style={styles.loginText}>Login</Text>

            <Text style={styles.labelText}>Email</Text>
            <TextInput style={styles.inputText} />

            <Text style={styles.labelText}>Password</Text>
            <TextInput style={styles.inputText} />
            <Button
              text="Login"
              bgColor="#000"
              onPress={() => navigation.navigate('MyWallet')}
            />
            <Text style={styles.orText}>OR</Text>

            <Text style={styles.loginText}>Sign-Up</Text>

            <Text style={styles.labelText}>Username</Text>
            <TextInput style={styles.inputText} />

            <Text style={styles.labelText}>Email</Text>
            <TextInput style={styles.inputText} />

            <Text style={styles.labelText}>Password</Text>
            <TextInput style={styles.inputText} />

            <Button text="Signup" bgColor="#000" />
          </SafeAreaView>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginSignupScreen;
