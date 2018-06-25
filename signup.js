import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Logo from './logo.js';

import {Actions} from 'react-native-router-flux';
const request = require('superagent');

export default class Signup extends Component<{}>{

    constructor(props){
        super(props)
        this.state = {
            username: '',
            passwork: ''
        }
    }

    OnPressAction = () => {
        const{username} = this.state;
        const{password} = this.state;
        console.log('ha');
        const data = {userName: username, password: password};
        request
        .post('http://localhost:3000/api/signup')
        .send(data)
        .then(function(res){
            alert('Sign up successfully');
        })
    }

    login() {
        Actions.login()
    }

    render(){
        return(
            <View style = {styles.container}>
                <Logo />
                <TextInput style = {styles.inputBox}
                    placeholder="User Name"
                    placeholderTextColor = "#ffffff"
                    onChangeText={username => this.setState({username})}/>
                <TextInput style = {styles.inputBox}
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor = "#ffffff"
                    onChangeText={password => this.setState({password})}/>
                <TouchableOpacity style={styles.button} onPress={this.OnPressAction}>
                    <Text style={styles.buttonText}> Sign Up </Text>
                </TouchableOpacity>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Already have an account? </Text>
                    <TouchableOpacity onPress={this.login}><Text style={styles.signupButton}> Login </Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    inputBox: {
        width: 300,
        height: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        marginVertical: 10
    },
    signupTextCont:{
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginVertical: 16,
        flexDirection: 'row'
    },
    button: {
        width: 300,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: 25,
        paddingVertical: 10,
        marginTop: 10,
        top:10,
    },

    buttonText:{
        fontSize:16,
        fontWeight: '500',
        textAlign: 'center',
        color: '#ffffff'
    },
    signupText:{
        fontSize: 16
    },
    signupButton:{
         fontSize:16,
         fontWeight:'800'
    }

});
