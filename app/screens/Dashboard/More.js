import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {dimensions, padding, heightScale, colors} from '../../styles/base';
import Header from '../../components/header';
import Modal from '../../components/makeInvestmentModal';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default class More extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          navigate={this.props.navigation.navigate}
          title={'Make Investment'}
        />
        <View style={styles.body}>
          <Text style={styles.planInfo}>MiniFx plan returns 10% Monthly!</Text>
        </View>
        <Modal style={styles.modal} />
        <Text style={styles.TC}>Terms and Conditions</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    flexDirection: 'column',
  },
  planInfo: {
    color: '#fff',
    fontWeight: '300',
    fontSize: width * 0.045,
    alignSelf: 'center',
  },
  body: {
    alignSelf: 'center',
    padding: padding.md,
    height: heightScale.breakdownBoxHeight,
    width: dimensions.fullWidth,
    backgroundColor: colors.primary,
  },
  TC: {
    color: '#19ACBE',
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: dimensions.fullHeight * 0.25,
  },
});
