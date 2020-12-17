import React from 'react'
import { View, Text, Alert, TouchableOpacity } from 'react-native'
import {styles,btncontainer } from '../../stylesheet'

export class Menu extends React.Component {
    onPress = () => {
        Alert.alert('You tapped the button');
    }
    render() {

      
        return (
            <View style={styles.btncontainer}>
                <View style={styles.btnrow}>
                    <TouchableOpacity style={styles.btnstyle} onPress={()=>this.props.navigate('RegisterRoute')}>
                        <Text style={styles.btntext}>  Register  </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnstyle} onPress={()=>this.props.navigate('LoginRoute')}>
                        <Text style={styles.btntext}>  Login  </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}