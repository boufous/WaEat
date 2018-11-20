import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text, Alert,
  TouchableOpacity,
  Image,
  Dimensions,
  View

} from 'react-native';
import { Button,Thumbnail } from 'native-base';

import axios from "axios";
import QRCodeScanner from 'react-native-qrcode-scanner';
import ProductScan from "./productScan";
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee, faSmileBeam } from '@fortawesome/free-solid-svg-icons'

class ScanScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      displayproductscore: false,
      displayCamera: true,
      displayproductPic: '../resources/picsHelper/no_image_available_3.jpg',
      picError: false,
      focusedScreen: false,
      key: 1
    }
  }


  static navigationOptions = {
    title: 'Lets start!',
    headerStyle: {
        backgroundColor: '#7EAD17',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
};

  componentDidMount() {
    const { navigation } = this.props;
    navigation.addListener('willFocus', () =>
      this.setState({ focusedScreen: true })
    );
    navigation.addListener('willBlur', () =>
      this.setState({ focusedScreen: false })
    );
  }



  onSuccess = (e) => {
    var isnum = /^\d+$/.test(e.data);
    if (isnum) {
      //  getProductInfo(e.data)(res => this.setState({ product: res.data }));
      const URL = `https://world.openfoodfacts.org/api/v0/product/${e.data}.json`;

      //const URL = `https://world.openfoodfacts.org/api/v0/product/5052320289240.json`;
      axios
        .get(URL)
        .then(res => {
          this.setState({ product: res.data.product, displayproductscore: true });
          const { navigate } = this.props.navigation;
          navigate('ProductScan', { product: this.state.product, displayproductscore: this.state.displayproductscore });
        })
        .catch(err => console.log(err));


    }
    else {
      // Alert.alert(`Sorry, this product doen't exist in our database`);
      const { navigate } = this.props.navigation;
      navigate('ScanAgain');

    }
    this.setState({ displayCamera: false });
  }

  valueCheck = (val) => {
    val = (val != '' || val != null) ? val : '';
    return val;
  }


  render() {
    const { heightw, widthw } = Dimensions.get('window');

    let scoreinfo;
    let productimage;
    //const { navigate } = this.props.navigation;
    // if (this.state.displayproductscore) {
    //   let Sugars = this.valueCheck(this.state.product.nutriments.sugars_100g);
    //   let Proteins = this.valueCheck(this.state.product.nutriments.proteins_100g);
    //   let Fiber = this.valueCheck(this.state.product.nutriments.fiber_100g);
    //   let Sodium = this.valueCheck(this.state.product.nutriments.sodium_100g);
    //   let Fat = this.valueCheck(this.state.product.nutriments['saturated-fat_100g']);
    //   let Energy = this.valueCheck(this.state.product.nutriments.energy_100g);
    //   /*<Text style={styles.buttonText}>Sugars: {Sugars}</Text>
    //   <Text style={styles.buttonText}>Proteins: {Proteins}</Text>
    //   <Text style={styles.buttonText}>Fiber: {Fiber}</Text>
    //   <Text style={styles.buttonText}>Sodium: {Sodium}</Text>
    //   <Text style={styles.buttonText}>Fat: {Fat}</Text>
    //   <Text style={styles.buttonText}>Energy(kcal): {Energy}</Text>
    //   */
    //   // if we get the product from the DB

    //   scoreinfo = <ProductScan image={this.state.product.image_front_url} name={this.state.product.product_name} />

    // } else {
    //   scoreinfo =
    //     <View style={styles.viewscore}>
    //       <TouchableOpacity style={styles.buttonTouchable}>
    //         <Text style={styles.buttonText} >No data</Text>
    //       </TouchableOpacity>
    //     </View>
    // }

    // PScanf = () => {
    //   //const { navigate } = this.props.navigation
    //   //navigate('Home');
    //   Alert.alert('toto1');
    //   }
    // if (this.state.displayCamera) {
    //   let scanner;

    //   const startScan = () => {

    //   };

    let Camera = this.state.focusedScreen ? <QRCodeScanner
      onRead={this.onSuccess}
      topViewStyle={{}}
      cameraStyle={{}}
      key={this.state.key}
      customMarker={<View style={styles.rectangleContainer}>
        <View style={styles.rectangle} />
      </View>}
      showMarker={true}



    /> : <View></View>

    return (
      // <View  style={styles.footer_we}><Text>footer</Text>
      // <Button onPress={this.handlePress}>
      // <Text>Click Me!</Text>
      // </Button>

      // </View>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>{Camera}</View>
        <View style={{ flexDirection: 'row',justifyContent:'center', alignItems:'center', backgroundColor: '#7EAD17', height: 90 }}>
        <Thumbnail square style={{ height: 90, width: 140 }}  source={require('../resources/logos/logo.png')}></Thumbnail>

          {/* <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#7EAD17',
              borderRadius: 0,
            }}
            activeOpacity={1}
          >
      
        <Image style={{ height: 50, width: 50 , alignSelf: 'center',borderWidth:1, borderColor:'#fff',}}  source={require('../resources/picsHelper/barcode.jpg')}></Image>
        <Text style={{color:'#fff', fontSize:18, fontWeight: 'bold',}}>Scan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#7EAD17',
              borderRadius: 0,
            }}
            activeOpacity={1}
          >
            <Text> 2- Check</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#7EAD17',
              borderRadius: 0,
            }}
            activeOpacity={1}
          >
            <Text> 2- Check</Text>
          </TouchableOpacity> */}

        </View>

      </View>
    );
    //   }
    //   else 
    //     return ( <View>
    //       <QRCodeScanner
    //         onRead={this.onSuccess}
    //         topViewStyle={{}}
    //         cameraStyle={{}}
    //         customMarker={<View style={styles.rectangleContainer}>
    //           <View style={styles.rectangle} />
    //         </View>}
    //         showMarker={true}
    //       />
    //        </View>)




  }
}
export default ScanScreen;


const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
    borderColor: '#7EAD17'
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'white',
  },
  buttonTouchable: {
  },
  borderColor: {
    alignContent: 'center',
    borderColor: 'red',
    alignContent: 'center',
    backgroundColor: 'white',
    height: 200,
    width: 220

  },
  viewscore: {
    height: 100,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(52, 52, 52, 0.5)',
  },
  settingScoreIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  picproduct: {

  }, button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  rectangleContainer: {
    backgroundColor: 'transparent'
  },
  rectangle: {
    width: 250,
    height: 190,
    borderWidth: 2,
    borderColor: 'green',
    backgroundColor: 'transparent',
    borderRadius: 20

  },
  scorePicProductScreen: {

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1
  }
});




