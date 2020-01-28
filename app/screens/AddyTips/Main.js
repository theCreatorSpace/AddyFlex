import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import {padding, font, dimensions, colors,} from '../../styles/base'
import Tips from '../../components/tips'
import tipList from '../../mock/tipList'
import Header from '../../components/header'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  //function to navigate screen and pass data item
  handleMore = (item) =>{
    const { navigate } = this.props.navigation
    navigate('Details', {tips: item})
  }
  

  render() {
    return (
      <View style = {styles.container}>
        
         {/* <View style = {styles.smallBox}>
                <Text style = {{paddingVertical: padding.md, color: 'white'}}>Increase your earning potential</Text>
         </View> */}

         <FlatList
                data={tipList}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) =>
                  <TouchableOpacity onPress = {()=>{this.handleMore(item)}}>
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
                  </TouchableOpacity>
                    
                }
                keyExtractor={(item, index) => index.toString()}
              />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        width: dimensions.fullWidth,
        backgroundColor: colors.background,
        flex: 1,
        alignItems: 'center',
    },
    smallBox: {
        height: dimensions.fullWidth/5,
        backgroundColor: colors.primary,
        alignItems:'center',
        justifyContent: 'center',
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
