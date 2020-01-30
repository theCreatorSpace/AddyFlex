import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {dimensions, padding, colors} from '../../styles/base';

import Transaction from '../../components/transactionSummary';
import InvestmentPlans from '../../components/investmentPlans';
import DailyEarnings from '../../components/dailyEarnings';
import Header from '../../components/header';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const props = this.props;
    return (
      <View style={styles.container}>
        <Header title={'Dashboard'} />
        <ScrollView style={{padding: padding.sm}}>
          <DailyEarnings />

        
          <Transaction />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: dimensions.fullHeight,
    width: dimensions.fullWidth,
    backgroundColor: colors.background,
  },
});
