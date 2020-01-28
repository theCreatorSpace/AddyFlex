import React from 'react';
import {Text, View} from 'react-native';
import {dimensions, padding, font, colors} from '../styles/base';

import Investments from './investments';

const componentName = ({params}) => (
  <View>
    <Text
      style={{color: 'grey', fontWeight: '500', marginVertical: padding.sm}}>
      Investment Plans
    </Text>

    <Investments />
  </View>
);

export default componentName;
