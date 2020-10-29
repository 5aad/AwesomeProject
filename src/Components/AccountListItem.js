import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

const styles = StyleSheet.create({
  labelText: {
    fontFamily: 'Manrope-Bold',
    marginBottom: 8,
    fontSize: 18,
    color: '#C4CACC',
  },
  text: {
    fontFamily: 'Manrope-Bold',
    fontSize: 16,
  },
  verif: {
    fontFamily: 'Manrope-Bold',
    fontSize: 16,
    color: '#C4CACC',
  },
  listContainer: {
    marginTop: 10,
    paddingBottom: 25,
    borderBottomWidth: 1,
    borderColor: '#C4C4C4',
    paddingHorizontal: 18,
  },

  listContent: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

const AccountListItem = ({labelName, text, check, ...props}) => {
  return (
    <View>
      <TouchableWithoutFeedback>
        <View style={styles.listContainer}>
          <Text style={styles.labelText}>{labelName}</Text>
          <View style={styles.listContent}>
            <Text style={styles.text}>{text}</Text>
            {check === 'true' ? (
              <Text style={styles.verif}>Unvarified</Text>
            ) : null}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default AccountListItem;
