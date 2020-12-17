import { NativeAppEventEmitter } from "react-native";
import React from 'react';
import { Text, View ,Image } from 'react-native';
import { styles } from '../../stylesheet'

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
    }
    toggleUser = () => {
        this.setState(previous => {
                      
            return {
                isLoggedIn: !previous.isLoggedIn

            };

        });

    }
    render() {
        let display = this.state.isLoggedIn ? 'Aman User' : this.props.message;
        return (
            <View style={styles.headStyle} >
                <Image
                 style={styles.logostyle}
                 source={require('../image/thumbnail_Leanvia-logo.png')}
                 />              
               
            </View>
        )
    }
}

