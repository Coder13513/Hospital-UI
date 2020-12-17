import React from 'react';
import { View, Text, Alert, TouchableHighlight,TextInput } from 'react-native';
import { Header } from '../sections/Header.js';
import { StackNavigator } from 'react-navigation';
import {styles } from '../../stylesheet'

export class Login extends React.Component {
    static navigationOptions = {
        header: null
    };
    constructor(props){
        super(props);
        this.state={
          
            name:"enter your name",
            email:"enter your mail"
        }
    }
    clearFields=()=>this.setState({name:'',email:''});

    sendMessage=()=>{
        Alert.alert(this.state.name,this.state.email);
        this.props.navigation.goBack();
    }

    render() {
        
        return (
            <View style={styles.container}>
                <Header message=" Login" />
                <Text style={styles.heading} > Hospital management System</Text> 
                <TextInput
                 style={styles.inputs}
                 value={this.state.name}
                 onChangeText={(name)=>this.setState({name})}
                 
                 /> 
               
                <TextInput
                 style={styles.inputs}
                 value={this.state.email}
                 onChangeText={(text)=>this.setState({email:text})}
                
                 />

                <TouchableHighlight onPress={this.sendMessage} underlayColor='31e981'>
                    <Text style={styles.buttons}>  
                    send message               
                    </Text>
                 </TouchableHighlight>

                 


                               
            </View>


        );
    }
}