import React from 'react';
import {Text, View} from 'react-native';
import Header from '../../components/breakDownHeader';
import {
  dimensions,
  heightScale,
  padding,
  colors,
  font,
} from '../../styles/base';
import PSchedule from '../../components/pSchedule'
const componentName = () => (
  <View style={{paddingBottom: padding.md}}>
    <Header />
    <PSchedule style={{flex: 1}} />
  </View>
);

export default componentName;
