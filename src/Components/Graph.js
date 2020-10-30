import React from 'react';
import {View, Text} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
import {color} from 'react-native-reanimated';

const screenWidth = Dimensions.get('window').width;
const Graph = () => {
  return (
    <View>
      <Text
        style={{
          marginLeft: 5,
          marginBottom: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#EBEEF2',
          paddingBottom: 10,
          marginRight: 15,
        }}>
        Analytics
      </Text>
      <LineChart
        data={{
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={screenWidth + 50} // from react-native
        withDots={false}
        withInnerLines={false}
        withOuterLines={false}
        withShadow={false}
        height={310}
        withHorizontalLabels={false}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 1, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(${0}, ${0}, ${0}, ${1})`,
          strokeWidth: 1,
        }}
        bezier
        style={{
          marginTop: 8,
          marginBottom: 2,
          borderRadius: 16,

          // paddingRight: 0,
          // marginRight: 0,
          // paddingHorizontal: 10,
          marginLeft: -50,
        }}
      />
    </View>
  );
};

export default Graph;
