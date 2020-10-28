import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
const styles = StyleSheet.create({
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
});

const Button = ({text, ...props}) => {
  return (
    <View>
      <TouchableHighlight onPress={props.onPress}>
        <View style={styles.loginButton}>
          <Text style={styles.loginButtonText}>{text}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default Button;
