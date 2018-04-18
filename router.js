import React from 'react';
import { TabNavigator } from 'react-navigation';
//import {icon} from 'react-native-elements';
import Home from './Home';
import Me from './Me';

export const Tabs = TabNavigator({
    Home: {
        screen: Home,
        /*navigationOptions: {
            tabBarLabel: 'Feed',
            tabBarIcon: ({tintColor}) => <Icon name = "list" size = {35} color = {tintColor} />,
        }*/
    },
    Me: {
        screen: Me,
        /*navigationOptions: {
            tabBarLabel: 'Feed',
            tabBarIcon: ({tintColor}) => <Icon name = "list" size = {35} color = {tintColor} />,
        }*/
    },
});
