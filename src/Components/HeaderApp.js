import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import images from '../api/images';
const styles = StyleSheet.create({
  tinyLogo: {
    width: 18,
    height: 18,
    marginRight: 10,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 18,
    justifyContent: 'space-between',
    marginVertical: 24,
    alignItems: 'center',
  },
  logout: {
    color: '#c4c4c4',
    fontSize: 15,
    fontWeight: '700',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
  },
});

const HeaderApp = ({check, headerName, headerWidth}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.headerContainer, {width: headerWidth}]}>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.goBack();
        }}>
        <Image style={styles.tinyLogo} source={images.leftArrow} />
      </TouchableWithoutFeedback>
      <Text style={styles.headerText}>{headerName}</Text>
      {check === 'true' ? (
        <TouchableWithoutFeedback>
          <Text style={styles.logout}>Logout</Text>
        </TouchableWithoutFeedback>
      ) : null}
    </View>
  );
};

export default HeaderApp;
