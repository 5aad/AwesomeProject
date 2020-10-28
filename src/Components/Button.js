import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {color} from 'react-native-reanimated';
const styles = StyleSheet.create({
  loginButton: {
    marginVertical: 14,
    borderRadius: 6,
    paddingVertical: 12,
    alignItems: 'center',
    elevation: 5,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

const Button = ({text,bgColor, ...props}) => {
  return (
    <View>
      <TouchableHighlight onPress={props.onPress}>
        <View style={[styles.loginButton, {backgroundColor: `${bgColor}`}]}>
          <Text style={styles.loginButtonText}>{text}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default Button;
