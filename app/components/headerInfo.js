/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions} from 'react-native';
import {colors, appBorderRadius, padding, heightScale, font, dimensions} from '../styles/base';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class HeaderInfo extends Component {
    render(){
        return (
      <View style={styles.container}>
        <View style={styles.left}>
            <View style={styles.topText}>
                <Text style={styles.textTitle}>
                    Recieved:
                </Text>
                <Text style={styles.value}>
                    400,000
                </Text>
            </View>
            <View style={styles.bottomText}>
                <Text style={styles.pendingTitle}>
                    Pending:
                </Text>
                <Text style={styles.value}>
                    400,000,000
                </Text>
            </View>
        </View>
        <View style={styles.right} ><View style={styles.CircleShapeView}/></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        borderBottomRightRadius: appBorderRadius.lg,
        height: heightScale.headerInfo,
        flexDirection: 'row',
        alignItems: 'center',
        width: dimensions.fullWidth,
        marginBottom: padding.md,
    },
    topText:{
        flexDirection: 'column',
    },
    left: {
        backgroundColor: colors.primary,
        flex: 1,
        height: height * 0.18,
        paddingLeft: width * 0.05,
        justifyContent: 'space-around',
    },
    right: {
        backgroundColor: colors.primary,
        paddingRight: padding.md,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: appBorderRadius.lg,
        height: height * 0.18,
    },
    textTitle: {
        color: '#23b7bc',
        fontWeight: '500',
        fontSize: font.reg,
    },
    pendingTitle: {
        color: colors.secondaryTwo,
        fontWeight: font.bold,
        fontSize: font.reg,
    },
    value: {
        fontSize: font.lg,
        fontWeight: 'bold',
        color: '#fff',
    },
    icon: {
        padding: 10,
        height: height * 0.01,
        width: height * 0.01,
        backgroundColor: '#fff',
    },
    CircleShapeView: {
        width: width * 0.2,
        height: width * 0.2,
        alignSelf: 'flex-end',
        borderRadius: 150/2,
        backgroundColor: '#00BCD4',
    },
});
