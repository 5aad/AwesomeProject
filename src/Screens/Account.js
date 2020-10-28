import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import AccountListItem from '../Components/AccountListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
  listContainer: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#C4C4C4',
    paddingHorizontal: 18,
  },
  listContent: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  tinyLogo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  addPayment: {
    fontSize: 14,
    color: '#979797',
    marginLeft: 18,
    marginTop: 10,
  },
  paymenMethod: {
    fontSize: 18,
    color: '#979797',
    marginLeft: 18,
    marginVertical: 12,
  },
  cardNum: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
});
const Account = () => {
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <SafeAreaView style={styles.container}>
        <AccountListItem text="abc" labelName="First Name" />
        <AccountListItem text="abc" labelName="Last Name" />
        <AccountListItem text="abx@gmail.com" labelName="Email" check="true" />
        <AccountListItem text="*********" labelName="Password" />
        <Text style={styles.paymenMethod}>Payment Method</Text>

        <TouchableWithoutFeedback>
          <View style={styles.listContainer}>
            <View style={styles.listContent}>
              <View style={styles.cardNum}>
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                  }}
                />
                <Text>123******</Text>
              </View>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.addPayment}>Add Payment Method</Text>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Account;
