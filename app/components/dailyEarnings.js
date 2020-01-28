import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import {dimensions, padding, font, colors} from '../styles/base'
import LinearGradient from 'react-native-linear-gradient';
import { AnimatedCircularProgress } from 'react-native-circular-progress';




const DailyEarnings = ({
    params,
}) => (
    <View style = {styles.container}>
       
            <LinearGradient colors={['#17519d', 'skyblue']} style={styles.linearGradient}>
            <Text style={styles.date}>
                January 15, 2020
            </Text>

            <View style = {{alignSelf :'center', width: '100%'}}>
            <AnimatedCircularProgress
                    size={120}
                    width={8}
                    fill={50}
                    tintColor="red"
                    backgroundColor = "#00e0ff"
                    rotation = {0}
                    style= {{alignSelf:'center', marginVertical:padding.sm}}
                    onAnimationComplete={() => console.log('onAnimationComplete')}>
                    {
                        (params) => (
                            <View style = {{}}>
        
                          <Text style = {{color: 'white', fontWeight: '500'}}>
                              30.00
                          </Text>
                          <Text style = {{alignSelf:'center',color:'white', fontSize:font.sm}}>NGN</Text>

                          </View>
                        )
                      }

                    </AnimatedCircularProgress>
                   
                    
            </View>
            

            <Text style = {{fontFamily: font.family, fontSize: font.md, color: '#fff', alignSelf:'center'}}>
                My Daily Earnings</Text>
            </LinearGradient>

    </View>
);

const styles = StyleSheet.create({
    linearGradient: {
        padding: padding.md,
        borderRadius: 5
      },
      date: {
        fontSize: font.md,
        color: '#ffffff',
        fontFamily: font.family,
        backgroundColor: 'transparent',
      },
})


export default DailyEarnings;
