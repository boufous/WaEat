/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StatusBar, Image, Platform, StyleSheet, View, Text } from 'react-native';
import ProductScan from './Components/productScan';
import ScanScreen from './Components/barCode';
import ProductDetails from './Components/productDetails';
import ScanAgain from './Components/scanAgain';
import ScanButton from './Components/scanButton';
import LogoTitle from './Components/logoTitle';
import Help_WE from './Components/help';
import { createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Thumbnail} from 'native-base';


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
  ProductScan: ProductScan,
  ScanAgain: ScanAgain,
  ScanButton: ScanButton
},
  {
    initialRouteName: 'HomeScreen',
    tintColor: '#fff',
    activeColor: '#fff',
    inactiveColor: '#dcdde1',
    activeTintColor: '#7EAD17',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#7EAD17',
        color:'#fff'
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
     

    

    },


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
  Scan: {
    screen: ScanNavigator,
    navigationOptions: {
      tabBarLabel: 'Scan',
      tabBarIcon: ({ tintColor }) => (<Thumbnail square style={{borderColor:'#fff',borderWidth:1, height: 30, width:40 }}  color={tintColor} source={require('./resources/picsHelper/ScanIcon.png')}></Thumbnail>)
    }
  },
  Help: {
    screen: Help_WE,
    navigationOptions: {
      tabBarLabel: 'How it works?',
      tabBarIcon: ({ tintColor }) => (<Icon name="ios-help-circle" size={25} color={tintColor} />)
    }
  }

}, {
    initialRouteName: 'Home',
    activeColor: '#fff',
    inactiveColor: '#dcdde1',
    activeTintColor: '#7EAD17',
    tintColor: '#fff',
    barStyle: { backgroundColor: '#fff' },
    swipeEnable: false,
    animationEnable: false,
    headerStyle: {
      backgroundColor: '#7EAD17',
    },
    headerTintColor: '#fff',
    headerTitle: <View><StatusBar
    backgroundColor="#7EAD17"
    barStyle="light-content"
  /><LogoTitle  /></View>,
    headerTitleStyle: {
      fontWeight: 'bold',
    },

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