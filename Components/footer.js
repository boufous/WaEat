import React, { Component } from 'react';
import { View,StyleSheet,TouchableOpacity,Alert, Text} from 'react-native';

import { Button  } from 'native-base';
class Footer_WE extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }



  handlePress = () => {
  
Alert.alert("toto");
  }
  render() {
    return (
        <View  style={styles.footer_we}><Text>footer</Text>
        <Button onPress={this.handlePress}>
        <Text>Click Me!</Text>
        </Button>
        
        </View>
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
    },
    
    button: {
      backgroundColor: 'blue',
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 12,
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      overflow: 'hidden',
      padding: 12,
      textAlign:'center',
    }
  
  });