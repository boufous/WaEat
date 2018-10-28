/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StatusBar, Image, Platform, StyleSheet, View, Text } from 'react-native';
import ScanScreen from './Components/BarCode';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost } from '@fortawesome/free-solid-svg-icons'

library.add(faGhost)

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (


      <View style={styles.container}>
        <StatusBar
          style={styles.statusBar}
          backgroundColor="#ffffff"
          barStyle="dark-content"
        />

        <View style={styles.header}>
          <Image style={styles.settinglogo}
            source={require('./resources/logos/logorow.png')}
            style={{ width: 200, height: 60 }}
          />
        </View>
        <View style={styles.body}><ScanScreen /></View>
        <View style={styles.footer}></View>


      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7EAD17',
    alignContent: 'center',
    alignItems:'center'
  },
  
  header: {
    fontSize: 20,
    //height:90,
    paddingVertical:10,
    flex:1,
    
  
  },
  body: {
    fontSize: 20,
    textAlign: 'center',
    flex:10
   
  },
  footer: {
    fontSize: 20,
    textAlign: 'center',
    height:90,
    flex:1    
  },
  statusBar: {
    backgroundColor: '#7EAD17',
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  settinglogo: {
    paddingRight: 6,
    paddingTop: 6,

  },


  settingIcon: {
   //flex:2,
  }
});



          //<Icon style={styles.settingIcon} name='search' color='white' size={40} />  