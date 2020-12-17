import {StyleSheet,Image,View} from 'react-native'

import React, { Component } from 'react'
import {styles} from '../../stylesheet'

export class Hero extends Component {
    render() {
        return (
            <View>
                <Image
                    style={styles.heroImage}
                    source={require('../image/download.png')}
                />
            </View>
        )
    }
}







