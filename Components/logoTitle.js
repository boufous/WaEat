import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ScanButton from './scanButton';
import { Thumbnail} from "native-base";


class LogoTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Thumbnail style={{ height: 55, width: 60 , alignSelf: 'center',borderWidth:1, borderColor:'#fff',}}  source={require('../resources/logos/logo.png')}></Thumbnail>
      );
  }
}

export default LogoTitle;
