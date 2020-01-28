/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {padding, font, componentShadow, appBorderRadius, dimensions, colors } from '../styles/base';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Investment extends Component {
    render(){
        const {plan,duration,capital,status} = this.props;
        return (
      <View style={styles.container}>
        <View style={styles.leftBody}>
          <Text style={styles.plan}>{plan}</Text>
          <View style={styles.Capital}>
            <Text style={styles.investedAmount}>{capital}</Text><Text style={styles.cent}>.00 NGN</Text>
          </View>
          <View style={styles.duration}>
            <Text style={styles.durTitle}>Duration: </Text><Text style={styles.month}>{duration} Months</Text >
          </View>
        </View>
        <View style={styles.rightBody}>
        <Text style={styles.status}>{status}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        height: dimensions.boxHeight,
        width: dimensions.boxWidth,
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: padding.md,
        backgroundColor: colors.white,
        borderRadius: appBorderRadius.thin,
        shadowColor: componentShadow.color,
        shadowOffset: componentShadow.offset,
        shadowOpacity: componentShadow.opacity,
        shadowRadius: componentShadow.radius,
        elevation: componentShadow.elevation,
    },
    leftBody: {
        padding: padding.sm,
        paddingLeft: padding.md,
        justifyContent: 'space-around',
    },
    rightBody: {
        flex: 1,
        paddingRight: padding.md,
        paddingTop: padding.sm,
        textAlign: 'right',
    },
    status: {
        color: colors.secondaryTwo,
        fontWeight: '500',
        fontSize: font.sm,
        textAlign: 'right',
    },
    plan: {
        color: colors.black,
        fontSize: font.md,
        fontWeight: font.regular,
    },
    investedAmount: {
        fontWeight: font.bold,
        fontSize: font.md,
        color: colors.black,
        justifyContent: 'flex-end',
    },
    Capital: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
    },
    duration: {
        flexDirection: 'row',
    },
    cent: {
        marginTop: padding.sm,
        position: 'relative',
        bottom: 0,
        paddingLeft: padding.thin,
        alignSelf: 'center',
    },
    month: {
        fontSize: font.reg,
        fontWeight: font.bold,
    },
});
