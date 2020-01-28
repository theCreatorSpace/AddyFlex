/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {padding, font, componentShadow, appBorderRadius, dimensions, colors, heightScale } from '../styles/base';
import data from '../mock/scheduleData';
import ScheduleInfo from '../components/scheduleInfo';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class PSchedule extends Component {
    render(){
        return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Amount</Text>
            <View style={{alignSelf: 'center'}}><Text style={styles.headerText}>Date</Text></View>
            <Text style={styles.headerText}>Status</Text>
        </View>
        <FlatList
          data={data}
          style={{flex:1}}
          keyExtractor={item => item.key}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => {
                this.handleMore(item);
              }}>
              <ScheduleInfo
                amount={item.amount}
                date={item.date}
                status={item.status}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignSelf: 'center',
    },
    header: {
        width: dimensions.fullWidth,
        flexDirection: 'row',
        padding: padding.md,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontSize: font.reg,
        fontWeight: font.regular,
        color: colors.grey,
    },
});
