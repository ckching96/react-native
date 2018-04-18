import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class Form extends Component<{}>{

    render(){
        return(
            <View style = {styles.container}>
                <TextInput style = {styles.inputBox}
                    placeholder="User Name"
                    placeholderTextColor = "#ffffff"/>
                <TextInput style = {styles.inputBox}
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor = "#ffffff"/>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}> {this.props.type} </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        marginVertical: 10
    },

    buttonText:{
        fontSize:16,
        fontWeight: '500',
        textAlign: 'center',
        color: '#ffffff'
    }
});
