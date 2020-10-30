import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';

const styles = StyleSheet.create({
  labelText: {
    fontFamily: 'Manrope-Bold',
    marginBottom: 8,
    fontSize: 15,
    color: '#C4CACC',
    paddingHorizontal: 18,
  },
  text: {
    fontFamily: 'Manrope-Medium',
    fontSize: 18,
  },
  verif: {
    fontFamily: 'Manrope-Bold',
    fontSize: 16,
    color: '#C4CACC',
    paddingRight: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
  },
  txtInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
    fontSize: 16,
    paddingHorizontal: 18,
    flex: 1,
  },
  listContainer: {
    marginTop: 10,
    borderColor: '#C4C4C4',
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
            <TextInput style={styles.txtInput} value={text} />
            {check === 'true' ? (
              <Text style={styles.verif}>Unverified</Text>
            ) : null}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default AccountListItem;
