/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {colors, button, appBorderRadius, padding, heightScale, font, dimensions} from '../styles/base';
import { color } from 'react-native-reanimated';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class HeaderInfo extends Component {
    render(){
        return (
      <View style={styles.container}>
        <View style={styles.investedAmount}>
            <Text style={{fontWeight: font.regular, fontSize: font.reg}}>Invested Amount</Text>
        </View>
        <View style={{flexDirection: 'row', padding: 0,marginBottom: padding.sm}}>
                <Text style={{fontSize: font.xl, fontWeight: font.regular}}>4,000,000</Text>
                <Text style={{alignSelf: 'flex-end',fontSize: font.md,fontWeight:font.regular,color:colors.grey}}>.00 NGN</Text>
        </View>
        <View style={styles.plan}>
            <Text style={{fontSize: font.reg,fontWeight: font.regular}}>RubyFX Plan</Text>
            <Text style={{fontSize: font.reg, color: colors.monochromatic,fontWeight: font.bold,marginLeft: padding.md,}}>Upgraded</Text>
        </View>
        <View style={styles.info}>
            <View>
                <Text style={styles.infoTitle}>Duration</Text>
                <Text style={styles.infoText}>12 Months</Text>
            </View>
            <View>
                <Text style={styles.infoTitle}>Start Date</Text>
                <Text style={styles.infoText}>19-12-2020</Text>
            </View>
            <View>
                <Text style={styles.infoTitle}>End Date</Text>
                <Text style={styles.infoText}>12-12-2021</Text>
            </View>
        </View>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Top Up</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        height: heightScale.breakdownBoxHeight,
        flexDirection: 'column',
        width: heightScale.breakdownBoxWidth,
        marginBottom: padding.md,
        borderRadius: appBorderRadius.sm,
        padding: padding.md,
    },
    button: {
        backgroundColor: button.colors.monochromatic,
        height: button.TopUpHeight,
        color: colors.white,
        width: button.TopUpWidth,
        alignSelf: 'flex-end',
        alignItems: 'center',
        textAlign: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: button.radius.sm,
    },
    buttonText: {
        color: colors.white,
        fontSize: font.md,
        alignSelf: 'center',
        fontWeight: font.bold,
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: padding.sm,
    },
    plan: {
        flexDirection: 'row',
        marginBottom: padding.sm,
    },
    investedAmount:{
    },
    infoText:{
        fontSize: font.sm,
        fontWeight: font.regular,
    },
    infoTitle:{
        fontWeight: font.regular,
        color: colors.grey,
        fontSize: font.sm,
    },
});
