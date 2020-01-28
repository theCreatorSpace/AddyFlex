/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {padding, font, componentShadow, appBorderRadius, dimensions, colors, heightScale } from '../styles/base';
import data from '../mock/scheduleData';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class ScheduleInfo extends Component {
    render(){
        const {amount,date,status} = this.props;
        return (
      <View style={styles.container}>
        <Text style={{fontWeight: font.regular,  fontSize: font.reg,width: dimensions.fullWidth / 2.86}}>N {amount}.00</Text>

        <View style={{width: dimensions.fullWidth / 2.83}}>
            <Text style={{alignSelf: 'center',color: colors.grey, fontSize: font.reg}}>{date}</Text>
        </View>

        <View style={{width: dimensions.fullWidth / 5}}>
            <Text style={{alignSelf: 'flex-end', fontSize: font.reg, color: colors.secondaryTwo }}>{status}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        width: dimensions.fullWidth,
        flexDirection: 'row',
        alignSelf: 'center',
        padding: padding.md,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: colors.grey,
        borderWidth: 0.24,
    },
});
