import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  key: {
    padding: 10,
    fontFamily: 'Manrope-Medium',
  },
  value: {
    padding: 10,
    height: 44,
    color: '#FF0000',
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

const PortfilioList = ({dataList, keyColor, sizeFont}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={dataList}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <Text
              style={[
                styles.key,
                {fontSize: parseInt(sizeFont), color: `${keyColor}`},
              ]}>
              {item.key}
            </Text>
            <Text style={[styles.value, {fontSize: 20}]}>{item.value}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default PortfilioList;
