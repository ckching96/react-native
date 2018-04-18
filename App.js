/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Tabs } from './router';
//import Main from './Main';

export default class App extends Component {
    render() {
        return(
                <Tabs />
        );
    }
}
