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
import HeaderApp from '../Components/HeaderApp';

const styles = StyleSheet.create({
  keybd: {
    flex: 1,
  },
  container: {
    flex: 1,

    marginHorizontal: 18,
  },
  labelText: {
    fontFamily: 'Manrope-Bold',
    marginTop: 14,
    fontSize: 15,
    color: '#C4CACC',
  },

  inputText: {
    fontFamily: 'Manrope-Medium',

    borderColor: '#C4C4C4',
    borderBottomWidth: 1,
    fontSize: 22,
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
        <ScrollView style={{backgroundColor: '#fff'}}>
          <HeaderApp headerName="Add Card" headerWidth={210} />
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
            <TextInput style={[styles.inputText, {marginBottom: 50}]} />

            <Button text="Save" bgColor="#000" />
          </SafeAreaView>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default AddCard;
