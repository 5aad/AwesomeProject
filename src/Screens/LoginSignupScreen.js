import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableHighlight,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  ScrollView,
} from 'react-native';

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
  loginButton: {
    marginVertical: 14,
    borderRadius: 6,
    paddingVertical: 12,
    backgroundColor: '#000',
    alignItems: 'center',
    elevation: 5,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
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
        <ScrollView>
          <SafeAreaView style={styles.container}>
            <Text style={styles.loginText}>Login</Text>

            <Text style={styles.labelText}>Email</Text>
            <TextInput style={styles.inputText} />

            <Text style={styles.labelText}>Password</Text>
            <TextInput style={styles.inputText} />

            <TouchableHighlight onPress={() => navigation.navigate('AddCard')}>
              <View style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Login</Text>
              </View>
            </TouchableHighlight>

            <Text style={styles.orText}>OR</Text>

            <Text style={styles.loginText}>Sign-Up</Text>

            <Text style={styles.labelText}>Username</Text>
            <TextInput style={styles.inputText} />

            <Text style={styles.labelText}>Email</Text>
            <TextInput style={styles.inputText} />

            <Text style={styles.labelText}>Password</Text>
            <TextInput style={styles.inputText} />

            <TouchableHighlight>
              <View style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Signup</Text>
              </View>
            </TouchableHighlight>
          </SafeAreaView>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginSignupScreen;
