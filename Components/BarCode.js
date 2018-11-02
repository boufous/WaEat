import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text, Alert,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import axios from "axios";
import QRCodeScanner from 'react-native-qrcode-scanner';
import { View } from "native-base";
import ProductDetails from "./productDetails";

import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee, faSmileBeam } from '@fortawesome/free-solid-svg-icons'

class ScanScreen extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
      displayproductscore: false,
      displayCamera: true,
      displayproductPic: '../resources/picsHelper/no_image_available_3.jpg',
      picError: false
    }
  }


  onSuccess = (e) => {
    var isnum = /^\d+$/.test(e.data);
    if (isnum) {
      //  getProductInfo(e.data)(res => this.setState({ product: res.data }));
      // const URL = `https://world.openfoodfacts.org/api/v0/product/${e.data}.json`;

      const URL = `https://world.openfoodfacts.org/api/v0/product/5052320289240.json`;
      axios
        .get(URL)
        .then(res => this.setState({ product: res.data.product, displayproductscore: true }))
        .catch(err => console.log(err))
    }
    else {
      Alert.alert(`This product doen't exist in our database`);
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

    if (this.state.displayproductscore) {
      let Sugars = this.valueCheck(this.state.product.nutriments.sugars_100g);
      let Proteins = this.valueCheck(this.state.product.nutriments.proteins_100g);
      let Fiber = this.valueCheck(this.state.product.nutriments.fiber_100g);
      let Sodium = this.valueCheck(this.state.product.nutriments.sodium_100g);
      let Fat = this.valueCheck(this.state.product.nutriments['saturated-fat_100g']);
      let Energy = this.valueCheck(this.state.product.nutriments.energy_100g);
      /*<Text style={styles.buttonText}>Sugars: {Sugars}</Text>
      <Text style={styles.buttonText}>Proteins: {Proteins}</Text>
      <Text style={styles.buttonText}>Fiber: {Fiber}</Text>
      <Text style={styles.buttonText}>Sodium: {Sodium}</Text>
      <Text style={styles.buttonText}>Fat: {Fat}</Text>
      <Text style={styles.buttonText}>Energy(kcal): {Energy}</Text>
      */
      // if we get the product from the DB

      scoreinfo = <ProductDetails image={this.state.product.image_front_url} name={this.state.product.product_name} />

    } else {
      scoreinfo =
        <View style={styles.viewscore}>
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText} >No data</Text>
          </TouchableOpacity>
        </View>
    }

    if (this.state.displayCamera) {

      return (
        <QRCodeScanner
          onRead={this.onSuccess}
          topViewStyle={{}}
          cameraStyle={{}}
          customMarker={<View style={styles.rectangleContainer}>
            <View style={styles.rectangle} />
          </View>}
          showMarker={true}
        />
      );
    }
    else {
      return (
        <View>{scoreinfo}</View>
      );

    }

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
    // padding: 16,
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

    //width: 300,
    height: 100,
    //backgroundColor: 'rgba(52, 52, 52, 0.5)',
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
    // fontFamily: 'Arial',
    //fontSize: 15,
    //color: 'white',
    justifyContent: 'center',

    alignItems: 'center'

  },
  picproduct: {



  },
  rectangleContainer: {
    //  flex: 1,
    // alignItems: 'center',
    //justifyContent: 'center',
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