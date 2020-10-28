import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, ScrollView} from 'react-native';

import Button from '../Components/Button';
import Graph from '../Components/Graph';
import Popup from '../Components/Popup';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 18,
  },
  stockText: {
    color: '#000',
    fontSize: 24,
    fontWeight: '500',
  },
  balance: {
    fontWeight: '800',
    fontSize: 28,
  },
  sign: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 20,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
});

const Stock = () => {
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.stockText}>Stock1</Text>

        <View style={styles.sign}>
          <Text>$</Text>
          <Text style={styles.balance}>173</Text>
        </View>

        {/* Graph */}
        <Graph />

        {/* <View style={styles.buttonContainer}>
          <View style={{flexGrow: 1, marginRight: 5}}>
            <Button text="Buy" bgColor="#FF0000" />
          </View>
          <View style={{flexGrow: 1, marginLeft: 5}}>
            <Button text="Sell" bgColor="#4FFF3D" />
          </View>
        </View> */}

        <Popup/>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Stock;
