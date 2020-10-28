import React from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

const SplashScreen = () => {
  return (
    <View style={{backgroundColor: 'fff'}}>
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </SafeAreaView>
    </View>
  );
};

export default SplashScreen;
