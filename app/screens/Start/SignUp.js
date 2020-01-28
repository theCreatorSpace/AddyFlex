/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import Form from '../../components/SignUpModal';
import { colors,font } from '../../styles/base';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Login extends Component {
    loginNav = () =>{
        const { navigate } = this.props.navigation;
        navigate('Login');
      }
    render() {
        return (
            <View style={styles.container}>
            {/* Component divided into three levels- Favicon Image, Sign Up modal & Bottom navigation */}
            <View style={styles.body}>
                <Form />
                <TouchableOpacity onPress = {()=>{this.loginNav();}} style={styles.bottomNav}>
                    <Text style={{paddingRight: 10, color: "#fff",fontSize: font.md, fontWeight: font.regular}}>Existing User?</Text>
                    <Text style={{color: colors.white, fontSize: font.md, fontWeight: font.regular}}>SIGN IN</Text>
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
        paddingTop: 70,
    },
    body: {
        flexDirection: 'column',
        height: height / 1.2,
    },
    favicon:{
        backgroundColor: '#fff',
        alignSelf: 'center',
        padding: 30,
    },
    bottomNav: {
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: 20,
    },
});
