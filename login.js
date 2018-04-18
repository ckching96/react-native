import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Logo from './logo.js';
import Form from './form.js';
import {Actions} from 'react-native-router-flux';

export default class Login extends Component<{}>{
    signup() {
        Actions.signup()
    }
    render(){
        return(
            <View style = {styles.container}>
                <Logo />
                <Form type = "Login"/>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Do not have an account yet? </Text>
                    <TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Signup </Text></TouchableOpacity>
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
