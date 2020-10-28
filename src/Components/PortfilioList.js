import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const PortfilioList = ({dataList}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={dataList}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <Text style={styles.item}>{item.key}</Text>
            <Text style={styles.item}>{item.value}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default PortfilioList;
