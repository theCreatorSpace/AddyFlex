import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import {padding, font, dimensions, colors } from '../styles/base'
import tipList from '../mock/tipList'

export default class tips extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {styles.container}>
        

        <FlatList
                data={tipList}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) =>
                    <View flexDirection = 'row' style = {styles.tipCard}>
                    <View style = {styles.icon}></View>
                    <View style = {{width: '60%'}}>
                      <Text style ={{margin: padding.sm, fontSize: font.md}}>
                          {item.title}
                      </Text>
                      </View>
                   
                    <View style = {{position:'absolute', right:padding.sm, width:'10%', height:'100%', justifyContent:'center', alignItems:'center'}}>
                        <Text>></Text>
                    </View>
              
                    </View>
                }
                keyExtractor={(item, index) => index.toString()}
              />
   
       
   
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        height: dimensions.fullHeight,
        alignItems: 'center',
        width: '100%',
    }, 
    tipCard: {
        height: dimensions.fullWidth/6,
        width: dimensions.fullWidth*0.95,
        backgroundColor:'white',
        marginVertical: padding.sm,
        borderRadius: 19,
        shadowOffset:{  width: 5,  height: 5,  },
        shadowColor: 'black',
        shadowOpacity: .04,
        alignItems:'center'
    },
    icon: {
        height : '100%',
        width: dimensions.fullWidth/6,
        backgroundColor: colors.primary,
        borderRadius:19,
        justifyContent: 'center',
        alignItems:'center'
    }
})
