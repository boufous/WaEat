import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Body_WE from './body';
import Header_WE from './header';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

  render() {
    return (
      <ScanScreen />
    );
  }
}

export default HomeScreen;
