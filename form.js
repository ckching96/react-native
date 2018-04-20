import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Linking
} from 'react-native';
import {Actions} from 'react-native-router-flux';


export default class Form extends Component<{}>{
    OnPressAction = () =>{
        console.log("here");
        fetch('http://localhost:3000/api/signup')
            .then(response => response.json())
            .then(data => console.log(data));
        console.log("test2");
        /*return(dispatch) => {
            const user = {
                data:{
                    userName: 'ckc',
                    password: 'ckc123'
                }
        };

        request.get("http://localhost:3000/api/signup")
        .send(user)
        .finish((error, res) => {
            dispatch({
                type: userName,
                user: res.body
            })

        })

    }*/
    // OnPressAction(){
    //   var url = 'http://localhost:3000/api/signup'
    //       Linking.canOpenURL(url).then(supported => {
    //           if (!supported) {
    //               console.log('Can\'t handle url: ' + url);
    //           } else {
    //               return Linking.openURL(url);
    //           }
    //       }).catch(err => console.error('An error occurred', err));
}

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
                <TouchableOpacity style={styles.button} onPress={this.OnPressAction}>
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
