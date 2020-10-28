import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
} from 'react-native';

import Button from '../Components/Button';
const Popup = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleSell, setModalVisibleSell] = useState(false);
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.modalText}>Buy</Text>
              <Text style={styles.modalText}>$0</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableHighlight style={styles.incContainer}>
                <Text style={styles.inc}>+</Text>
              </TouchableHighlight>
              <TextInput style={styles.inputText} />
              <TouchableHighlight style={styles.incContainer}>
                <Text style={styles.dec}>-</Text>
              </TouchableHighlight>
            </View>
            <Button
              text="Buy"
              bgColor="#000"
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            />
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleSell}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.modalText}>Sell</Text>
              <Text style={styles.modalText}>$1730</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableHighlight style={styles.incContainer}>
                <Text style={styles.inc}>+</Text>
              </TouchableHighlight>
              <TextInput style={styles.inputText} />
              <TouchableHighlight style={styles.incContainer}>
                <Text style={styles.dec}>-</Text>
              </TouchableHighlight>
            </View>
            <Button
              text="Sell"
              bgColor="#000"
              onPress={() => {
                setModalVisibleSell(!modalVisibleSell);
              }}
            />
          </View>
        </View>
      </Modal>

      <View style={styles.buttonContainer}>
        <View style={{flexGrow: 1, marginRight: 5}}>
          <Button
            text="Buy"
            bgColor="#63E000"
            onPress={() => {
              setModalVisible(true);
            }}
          />
        </View>
        <View style={{flexGrow: 1, marginLeft: 5}}>
          <Button
            text="Sell"
            bgColor="#FF0000"
            onPress={() => {
                setModalVisibleSell(true);
            }}
          />
        </View>
      </View>

      {/* <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight> */}
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: 300,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize:24,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  incContainer: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#000',
    marginVertical:26
  },
  inc: {
    fontSize: 38,
    paddingVertical: 6,
    paddingHorizontal: 20,
  },
  dec: {
    fontSize: 38,
    paddingVertical: 6,
    paddingHorizontal: 25,
  },
  inputText: {
    borderBottomColor: '#000',
    borderBottomWidth: 2,
    fontSize: 72,
  },
});

export default Popup;
