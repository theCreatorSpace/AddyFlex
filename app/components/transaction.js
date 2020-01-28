import React from 'react';
import { Text, View , StyleSheet} from 'react-native';
import {dimensions, padding, font, colors} from '../styles/base'

const Transaction = ({
    title, value, unit
}) => (
    <View flexDirection= 'row' style = {styles.container}>
        <View style = {styles.textContainer}>
            <Text style = {{fontSize: font.sm,color:'grey'}}>{title}</Text>
            <View flexDirection= 'row'>
                  <Text style = {{fontSize: font.md, fontWeight: '500'}}>{value}</Text>
                  <Text style = {{fontSize: font.sm, fontWeight: '500',alignSelf:'flex-end'}}>{unit}</Text>
            </View>
            
        </View>

        <View style = {styles.imgContainer}>
            <View style ={{borderRadius: 100, width: '100%', height:'70%', backgroundColor: colors.primary}}>

            </View>
        </View>
      
    </View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: dimensions.fullWidth*0.95,
        height: dimensions.fullWidth/5,
        borderRadius: 10,
        shadowOffset:{  width: 5,  height: 5,  },
        shadowColor: 'black',
        shadowOpacity: .04,
        paddingHorizontal: padding.md, 
        paddingRight: padding.sm,
        margin: 5
    }, 
    textContainer: {
        height:'100%',
        width: '80%',
        justifyContent:'space-evenly',
    },
    imgContainer: {
        width: '16%',
        height:'100%',
        alignItems:'center',
        justifyContent: 'center',
     
    }
    
})


export default Transaction;
