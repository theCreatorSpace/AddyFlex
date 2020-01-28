import React, { Component } from 'react';
import { View, Text,StyleSheet, ScrollView} from 'react-native';
import {dimensions,font, colors, padding} from '../../styles/base'

export default class more extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {title,tmp,body} = this.props.navigation.state.params.tips
    return (
        <ScrollView style = {styles.container}>
          <View style = {styles.header}>
              <Text style = {{fontSize:font.md}}>{title}</Text>
              <Text style = {{color: 'grey', fontSize:font.sm, marginVertical:padding.sm}}>{tmp}</Text>
          </View>
  
          <View style = {styles.body}>
              <Text>
                {body}
              </Text>
  
          </View>
  
         
        </ScrollView>
      );
    }
  }

const styles = StyleSheet.create({
    container: {
        height: dimensions.fullHeight,
        width: dimensions.fullWidth,
        backgroundColor: colors.background
    }, 
    header: {
        height: dimensions.fullWidth/5,
        padding: padding.md, 
       
    },
    body:{
        paddingHorizontal: padding.md
    },
})