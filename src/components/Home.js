import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../sections/Header.js';
import {Hero } from '../sections/Hero.js';
import { Menu } from '../sections/Menu.js';
import {Label} from '../sections/Label.js';
import {styles} from '../../stylesheet';
import { StackNavigator } from 'react-navigation';

export class Home extends React.Component{
    static navigationOptions={
        header:null
    };
    render(){
        const {navigate}=this.props.navigation;
        return(
            <View style={styles.container}>               
                <Header />
                <Label />
                <Hero />
                <Menu navigate={navigate}/>           
            </View>           
        );
    }
}