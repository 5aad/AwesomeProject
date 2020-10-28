import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, ScrollView} from 'react-native';

import Card from '../Components/Card';
import Graph from '../Components/Graph';
import PortfilioList from '../Components/PortfilioList';

const data = [
  {key: 'Stock 1', value: -6},
  {key: 'Stock 2', value: -10},
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 18,
  },
  myWalletText: {
    color: '#000',
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
  },
  balanceContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'flex-end',
  },
  balanceText: {
    fontSize: 16,
    fontWeight: '400',
    marginRight: 10,
  },
  balance: {
    fontWeight: '800',
    fontSize: 28,
  },
  sign: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});

const MyWallet = () => {
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.myWalletText}>My Wallet</Text>
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceText}>Balance:</Text>
          <View style={styles.sign}>
            <Text>$</Text>
            <Text style={styles.balance}>1,678</Text>
          </View>
        </View>

        {/* Graph */}
        <Graph />

        <Text style={{marginBottom: 12, marginTop: 0}}>Portfilio</Text>
        <Card>
          <PortfilioList dataList={data} sizeFont={16} keyColor={'#C4C4C4'} />
        </Card>
      </SafeAreaView>
    </ScrollView>
  );
};

export default MyWallet;
