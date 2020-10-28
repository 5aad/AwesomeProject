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
    marginTop: 32,
    marginBottom: 14,
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
  cardDetailContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'stretch',
  },
});

const AddCard = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={styles.keybd}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <SafeAreaView style={styles.container}>
            <Text style={styles.labelText}>Cardolder Name</Text>
            <TextInput style={styles.inputText} />

            <Text style={styles.labelText}>Card Number</Text>
            <TextInput style={styles.inputText} />

            <View style={styles.cardDetailContainer}>
              <View style={{flexGrow: 1, marginRight: 20}}>
                <Text style={styles.labelText}>Exp. Date</Text>
                <TextInput style={styles.inputText} />
              </View>

              <View style={{flexGrow: 1.5, marginLeft: 20}}>
                <Text style={styles.labelText}>CVV</Text>
                <TextInput style={styles.inputText} />
              </View>
            </View>

            <Text style={styles.labelText}>Zip Code</Text>
            <TextInput style={styles.inputText} />

            <TouchableHighlight>
              <View style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Save</Text>
              </View>
            </TouchableHighlight>
          </SafeAreaView>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default AddCard;
