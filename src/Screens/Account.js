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
import images from '../api/images';
import AccountListItem from '../Components/AccountListItem';
import HeaderApp from '../Components/HeaderApp';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontFamily: 'Manrope-Bold',
    fontSize: 14,
    color: '#979797',
    marginLeft: 18,
    marginTop: 10,
  },
  paymenMethod: {
    fontFamily: 'Manrope-Bold',
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
const Account = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <SafeAreaView style={styles.container}>
        <HeaderApp headerName="Account" check="true"/>
        <AccountListItem text="abc" labelName="First Name" />
        <AccountListItem text="abc" labelName="Last Name" />
        <AccountListItem text="abx@gmail.com" labelName="Email" check="true" />
        <AccountListItem text="*********" labelName="Password" />
        <Text style={styles.paymenMethod}>Payment Method</Text>

        <TouchableWithoutFeedback>
          <View style={styles.listContainer}>
            <View style={styles.listContent}>
              <View style={styles.cardNum}>
                <Image style={styles.tinyLogo} source={images.visa} />
                <Text>123******</Text>
              </View>
              <Image style={styles.tinyLogo} source={images.rightArrow} />
            </View>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('AddCard')}>
          <Text style={styles.addPayment}>Add Payment Method</Text>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Account;
