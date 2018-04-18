import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Logo from './logo.js';
import Form from './form.js'

export default class Signup extends Component<{}>{
    render(){
        return(
            <View style = {styles.container}>
                <Logo />
                <Form type = "Signup" />
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Already have an account? </Text>
                    <Text style={styles.signupButton}> Sign in </Text>
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
