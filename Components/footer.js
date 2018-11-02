import React, { Component } from 'react';
import { View,StyleSheet, Text } from 'react-native';

class Footer_WE extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View  style={styles.footer_we}><Text>footer</Text></View>
    );
  }
}

export default Footer_WE;


const styles = StyleSheet.create({
     
    footer_we: {
      height:80,
      backgroundColor: '#7EAD17',
      justifyContent: 'center',
      alignItems:'center'
    }});