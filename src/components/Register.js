import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Alert,
    AsynchStorage
} from 'react-native';
import {styles} from '../../stylesheet'



export class Register extends Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            passwordConfirm: '',

        };
    };
    cancelRegister = () => {
        Alert.alert('Registration Cancelled');
        this.props.navigation.navigate('HomeRoute');
    };
    registerAccount = () => {
        if (!this.state.username) {
            Alert.alert("enter username")
        }
        else if (this.state.password !== this.state.passwordConfirm) {
            Alert.alertt("Passwords donot match")
        }
        else {
            AsynchStorage.getItem(this.state.username, (err, result)  => {
                if (result !== null) {
                    Alert.alert(`${this.state.username}  already exist`);
                }
                else {
                    AsynchStorage.setItem(this.state.username, this.state.password, (err, result)  => {
                        Alert.alert(`${this.state.username} account created`);
                        this.props.navigation.navigate('HomeRoute');

                    });
                }
            });
        }
    }

    render() {
        return (
            <View style={styles.registerContainer}>
                <Text style={styles.registerHeading}> Register Account</Text>

                <TextInput
                style={styles.Input}
                onChangetext={(username)=>{this.setState(username)}}
                value={this.state.username}
                />
                <Text style={styles.label}>Enter Username </Text>

                <TextInput
                style={styles.Input}
                onChangetext={(password)=>{this.setState(password)}}
                value={this.state.password}
                secureTextEntry={true}
                />
                <Text style={styles.label}>Enter Password </Text>

                <TextInput
                style={styles.Input}
                onChangetext={(passwordConfirm)=>{this.setState(passwordConfirm)}}
                value={this.state.passwordConfirm}
                secureTextEntry={true}
                />
                <Text style={styles.label}>Enter passwordConfirm </Text>

                <TouchableHighlight onPress={this.registerAccount} underlayColor='#31e981'>
                    <Text style={styles.buttons}>
                        Register
                    </Text>
                </TouchableHighlight>  

                <TouchableHighlight onPress={this.cancelRegister} underlayColor='#31e981'>
                    <Text style={styles.buttons}>
                        cancel
                    </Text>
                </TouchableHighlight>


            </View>
        )
    }
}

export default Register


   


