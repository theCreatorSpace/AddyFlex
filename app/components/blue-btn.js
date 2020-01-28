import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {padding, font, colors, dimensions} from '../styles/base';

const componentName = ({title, onClick}) => (
  <View style={styles.btnContainer}>
    <TouchableOpacity onPress={onClick}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: colors.primary,
    padding: 10,
    width: dimensions.fullWidth / 2.3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    alignSelf: 'center',
    margin: 20,
  },
  btnText: {
    color: colors.white,
    fontWeight: font.bold,
    fontSize: font.md,
  },
});

export default componentName;
