import React, { Component } from 'react';
import { View, StyleSheet,Text } from 'react-native';
import ScanScreen from './barCode';


class Body_WE extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View  style={styles.body_we}></View>
    );
  }
}

export default Body_WE;
//


const styles = StyleSheet.create({
     
    body_we: {
        flex:1,
      
      backgroundColor: '#ffff',
      
      justifyContent: 'center',
      alignItems:'center'
    }});

    