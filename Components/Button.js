

import React,{Component} from "react";
import {
 
  Text ,
  TouchableOpacity
 
} from 'react-native';
const styles = StyleSheet.create({
    box: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 50
    },
    text: {
    color: 'white',
    fontSize: 20
    }
   });
   class Button extends React.Component {
    render() {
    return (
    <TouchableOpacity style={styles.box}>
    <Text style={styles.text}>
    {this.props.title}
    </Text>
    </TouchableOpacity>
    );
    }
   }
   export default  We_Button