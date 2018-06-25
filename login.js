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


export default class Login extends Component<{}>{

    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    OnPressAction = () => {
        console.log('yo');
        //let loggedin = false;
        fetch('http://localhost:3000/api/signup')
        .then((res) => {return res.json()})
        .then((data) => {
            let loggedin = false;
            data.forEach((user) => {
                var name = user.userName
                var pw = user.password
                if (name == this.state.username && pw == this.state.password && !loggedin){
                    //alert('Login successfully');
                    loggedin = true;
                }
                console.log(loggedin);
            })
            if(loggedin == false){
                alert('login failed');
            } else {
                alert('login success');
            }
        })
    }

    signup() {
        Actions.signup()
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
                    <Text style={styles.buttonText}> Login </Text>
                </TouchableOpacity>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Do not have an account yet? </Text>
                    <TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Sign Up </Text></TouchableOpacity>
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
    signupTextCont:{
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginVertical: 16,
        flexDirection: 'row'
    },
    signupText:{
        fontSize: 16
    },
    signupButton:{
         fontSize:16,
         fontWeight:'800'
    }
});
