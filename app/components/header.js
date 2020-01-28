import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {colors, heightScale, padding, font} from '../styles/base';

const Header = ({title}) => (
  <View style={styles.container}>
    <Text
      style={{
        color: 'white',
        fontSize: font.md,
        alignSelf: 'flex-end',
        fontWeight: font.regular,
      }}>
      {title}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: heightScale.header,
    backgroundColor: colors.primary,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    paddingBottom: padding.md,
    textAlign: 'center',
  },
});

export default Header;
