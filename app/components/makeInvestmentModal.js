import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet, Dimensions} from 'react-native';
import { heightScale, dimensions } from '../styles/base';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default class InvestModal extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Amount"
          style={styles.input}
          keyboardType={'numeric'}
        />
        <TextInput placeholder="Duration" style={styles.input} />
        <View style={styles.buttons}>
          <View style={styles.investButton}>
            <Text style={styles.buttonText}>Invest</Text>
          </View>
          <View style={styles.calButton}>
            <Text style={styles.buttonText}>Calculate</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 15,
    width: width * 0.8,
    position: 'absolute',
    height: width * 0.75,
    alignSelf: 'center',
    marginTop: dimensions.fullHeight * 0.2,
    flexDirection: 'column',
    padding: 5,
    justifyContent: 'space-around',
  },
  input: {
    fontSize: 18,
    borderBottomColor: '#8c8c8c',
    borderBottomWidth: 2,
    opacity: 0.4,
    paddingBottom: 10,
    width: width * 0.65,
    alignSelf: 'center',
  },
  buttons: {
    width: width * 0.65,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  investButton: {
    backgroundColor: '#17519D',
    padding: 15,
    width: width * 0.3,
    borderRadius: 7,
  },
  calButton: {
    backgroundColor: '#8c8c8c',
    padding: 15,
    width: width * 0.3,
    borderRadius: 7,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
    alignSelf: 'center',
  },
});
