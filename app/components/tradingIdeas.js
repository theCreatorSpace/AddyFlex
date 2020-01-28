import React, { Component } from 'react';
import { View, Text, StyleSheet,FlatList} from 'react-native';
import {dimensions, font,padding, colors} from '../styles/base'

export default class tradingIdeas extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View flexDirection = 'row' style = {styles.tradingIdea}>
            <View style = {styles.tradingTextContainer}>
                <Text style = {{fontSize: font.md}}>
                    Near-term Trade Setups in USD/CAD, EUR/USD and USD/JPY
                </Text>

                <Text style = {{marginVertical:padding.sm, fontSize:font.sm, color:'grey'}}>Nov 12, 2019</Text>

            </View>

            <View style = {styles.tradingImgContainer}>
                <View style = {styles.tradeImg}>

                </View>
            </View>
         </View>

         
    );
  }
}

const styles = StyleSheet.create({
    tradingIdea: {
        width: '100%',
        height: dimensions.fullWidth/4,
        padding: padding.sm,
        borderBottomColor:'grey',
        borderWidth: 0.3
    },
    tradingTextContainer: {
        width: '70%',
        height: '100%',

        justifyContent: 'center',
       // backgroundColor: 'white'
    }, 
    tradingImgContainer: {
        height:'100%',
        width: '30%',
        justifyContent: 'center',
        alignItems:'center',
    }, 
    tradeImg: {
        width:'90%',
        height: '70%',
        borderRadius:10,
        backgroundColor:'black'
    }
})
