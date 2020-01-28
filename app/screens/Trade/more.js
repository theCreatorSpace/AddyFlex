import React, { Component } from 'react';
import { View, Text,StyleSheet, ScrollView, Image} from 'react-native';
import {dimensions,font, colors, padding} from '../../styles/base'
import ImageViewer from 'react-native-image-zoom-viewer';




class more extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

  render() {
    const {title,tmp, url,body} = this.props.navigation.state.params.tradingView
    return (
        <ScrollView style = {styles.container}>
        <View style = {styles.header}>
            <Text style = {{fontSize:font.md}}>{title}</Text>
            <Text style = {{color: 'grey', fontSize:font.sm, marginVertical:padding.sm}}>{tmp}</Text>
        </View>

        <View style = {styles.img}>
        <ImageViewer
            imageUrls={[
              {
                url
              },
            ]}
            style={ styles.tradeImg}
                                />
        </View>

        <View style = {styles.body}>
            <Text>
                {body}
            </Text>

        </View>

        <View style = {styles.disclaimer}>
            <View style = {styles.disclaimerContent}>
                <Text>Disclaimer: </Text>
                <Text style = {{color:'grey', fontSize: font.sm, marginVertical: padding.sm}}>Trading foreign exchange on margin carries a high level of risk, and may not be suitable for all investors. Past performance is not indicative of future results. The high degree of leverage can work against you as well as for you.</Text>
            </View>
        </View>
      </ScrollView>
    );
  }
}



export default more;


const styles = StyleSheet.create({
    container: {
        height: dimensions.fullHeight,
        width: dimensions.fullWidth,
        backgroundColor: colors.background
    }, 
    header: {
        height: dimensions.fullWidth/4,
        padding: padding.md
    },
    img: {
        height: dimensions.fullWidth/1.5,
        backgroundColor: 'black'
    }, 
    tradeImg:{
        height: '100%',
        width: '100%'
    },
    body:{
        padding: padding.md
    },
    disclaimer:{
       padding:padding.md
    },
    disclaimerContent: {
        borderWidth:0.5,
        borderColor: 'gray',
        borderRadius:10,
        padding: padding.sm
    }
})
