import {StyleSheet,Image,View,Text} from 'react-native'

import React, { Component } from 'react'
import {styles} from '../../stylesheet'

export class Label extends Component {
    render() {
        return (
            <View> 
                 <Text style={styles.heading} > Hospital Management System</Text> 
               
            </View>
        )
    }
}
