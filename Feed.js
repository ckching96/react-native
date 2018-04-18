import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Login from './login.js';
import Signup from './signup.js'

type Props = {};
class Feed extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Signup/ >
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default Feed;
