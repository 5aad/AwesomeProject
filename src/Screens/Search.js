import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  ScrollView,
} from 'react-native';
import PortfilioList from '../Components/PortfilioList';

const data = [
  {key: 'Stock 1', value: -6},
  {key: 'Stock 2', value: -10},
  {key: 'Stock 3', value: -6},
  {key: 'Stock 4', value: -10},
  {key: 'Stock 5', value: -6},
  {key: 'Stock 6', value: -10},
];

const styles = StyleSheet.create({
  keybd: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 18,
    backgroundColor: '#fff',
  },

  inputText: {
    borderColor: '#C4C4C4',
    borderWidth: 1,
    borderRadius: 9,
    paddingHorizontal: 14,
  },
});

const Search = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={styles.keybd}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={{backgroundColor: '#fff'}}>
          <SafeAreaView style={styles.container}>
            <TextInput style={styles.inputText} placeholder="Search" />
            <PortfilioList dataList={data} sizeFont={18} keyColor={'#000'} />
          </SafeAreaView>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Search;
