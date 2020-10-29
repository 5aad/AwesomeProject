import React from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet} from 'react-native';
import images from '../api/images';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.tinyLogo} source={images.logo} />
    </SafeAreaView>
  );
};

export default SplashScreen;
