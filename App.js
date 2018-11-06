/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StatusBar, Image, Platform, StyleSheet, View, Text } from 'react-native';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGhost } from '@fortawesome/free-solid-svg-icons';
import Footer_WE from './Components/footer';
import Body_WE from './Components/body';
import Header_WE from './Components/header';
import Help_WE from './Components/help';
import ProductScan from './Components/productScan';
import HomeScreen from './Components/homeScreen';
import ScanScreen from './Components/barCode';
import ProductDetails from './Components/productDetails';

import { createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
//import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
  },


});


const ScanNavigator = createStackNavigator({
  HomeScreen: ScanScreen,
  ProductDetails: ProductDetails,
  ProductScan:ProductScan
},
  {
    initialRouteName: 'ProductScan',
  }
);


export default createMaterialBottomTabNavigator({

  Home: {
    screen: ScanNavigator,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (<Icon name="ios-home" size={25} color={tintColor} />)
    }
  },
  Body: {
    screen: Body_WE,
    navigationOptions: {
      tabBarLabel: 'Barcode',
      tabBarIcon: ({ tintColor }) => (<Icon name="ios-barcode" size={25} color={tintColor} />)
    }
  },
  Help: {
    screen: Help_WE,
    navigationOptions: {
      tabBarLabel: 'Help',
      tabBarIcon: ({ tintColor }) => (<Icon name="ios-help-circle" size={25} color={tintColor} />)
    }
  },
  // ProductScan: {
  //   screen: ProductDetails,
  //   navigationOptions: {
  //     tabBarLabel: 'Product info',
  //     tabBarIcon: ({ tintColor }) => (<Icon name="ios-help-circle" size={25} color={tintColor} />)
  //   }
  // },

}, {
    initialRouteName: 'Home',
    activeColor: '#fff',
    inactiveColor: '##BBBBBB',
    activeTintColor: '#7EAD17',
    tintColor: '#BBBBBB',
    barStyle: { backgroundColor: '#fff' },
    swipeEnable: false,
    animationEnable: false
  });







// export default createBottomTabNavigator(
//   {
//     Home: App,
//     Settings: Body_WE,
//   },
//   {
//     navigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, horizontal, tintColor }) => {
//         const { routeName } = navigation.state;
//         let iconName;
//         if (routeName === 'Home') {
//           iconName = `ios-information-circle${focused ? '' : '-outline'}`;
//         } else if (routeName === 'Settings') {
//           iconName = `ios-options${focused ? '' : '-outline'}`;
//         }

//         // You can return any component that you like here! We usually use an
//         // icon component from react-native-vector-icons
//         return <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
//       },
//     }),
//     tabBarOptions: {
//       activeTintColor: 'tomato',
//       inactiveTintColor: 'gray',
//     },
//   }
// );