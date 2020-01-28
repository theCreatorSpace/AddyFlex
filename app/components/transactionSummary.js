import React, { Component } from 'react';
import { Text, View} from 'react-native';
import { padding} from '../styles/base'
import Transaction from './transaction'

 
const transactionSummary= ({
        params,
    }) => (
        <View>
            <Text style = {{color:'grey', fontWeight:'500', marginVertical:padding.sm}}>Transaction Summary</Text>
            
                <Transaction title = 'TOTAL INVESTMENT' value = '30'/>
                <Transaction title = 'AMOUNT INVESTED' value = '30000' unit = '.00NGN'/>
                <Transaction title = 'PENDING RETURN' value = '100000' unit = '.00NGN'/>
                <Transaction title = 'RETURNED INVESTMENT' value = '10000' unit = '.00NGN'/>
        </View>
    );

export default transactionSummary;


