import React, { Component } from 'react';
import { View,Image,StyleSheet, Text } from 'react-native';

class Header_WE extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View  style={styles.header_we}>
        <Image  
          source={require('../resources/logos/logorow.png')}
          style={{ width: 200, height: 60 }}
        />
        
      </View>
    );
  }
}

export default Header_WE;


const styles = StyleSheet.create({
     
    header_we: {
      height:90,
      backgroundColor: '#7EAD17',
      justifyContent: 'center',
      alignItems:'center'
    }});