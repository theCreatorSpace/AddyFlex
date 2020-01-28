/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import LoginForm from '../../components/LoginModal';
import {padding, colors, font, dimensions} from '../../styles/base';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Login extends Component {
    handleSignUp = () =>{
        const { navigate } = this.props.navigation;
        navigate('SignUp');
      }
    render() {
        return (
            <View style={styles.container}>
            {/* Component divided into three levels- Favicon Image, Sign Up modal & Bottom navigation */}
            <View style={styles.body}>
                <View style={styles.favicon}>
                    <Image
                    style={{width: dimensions.fullWidth / 5, height: dimensions.fullWidth / 5}}
                    source={require('../../mock/img/addy.png')}
                    />
                </View>

                <LoginForm navigation={this.props.navigation} />

                <TouchableOpacity onPress = {()=>{this.handleSignUp();}} style={styles.bottomNav}>
                    <Text style={{paddingRight: 10, color: colors.white, fontSize: font.md,fontFamily: font.family,}}>New User?</Text>
                    <Text style={{color: colors.white, fontSize: font.md, fontWeight: font.regular}}>CREATE ACCOUNT</Text>
                </TouchableOpacity>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#17519D',
        paddingTop: dimensions.fullHeight * 0.15,
    },
    body: {
        flexDirection: 'column',
        height: height / 1.2,
    },
    favicon:{
        alignSelf: 'center',
    },
    bottomNav: {
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: 20,
    },
});
