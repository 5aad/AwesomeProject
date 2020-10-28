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

import Card from '../Components/Card';
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
});

const MyWallet = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text>My Wallet</Text>
        <View>
          <Text>Balance:</Text>
          <Text>$1,678</Text>
        </View>

        {/* Graph */}

        <Text>Portfilio</Text>
        <Card>
          <PortfilioList dataList={data} />
        </Card>
      </SafeAreaView>
    </ScrollView>
  );
};

export default MyWallet;
