import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text, Alert,
  TouchableOpacity,
  Image
} from 'react-native';
import axios from "axios";
import QRCodeScanner from 'react-native-qrcode-scanner';
import { View } from "native-base";

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
      const URL = `https://world.openfoodfacts.org/api/v0/product/${e.data}.json`;

      // const URL = `https://world.openfoodfacts.org/api/v0/product/5052320289240.json`;
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
      scoreinfo =
      <View style={styles.scorePicProductScreen}>
        <View style={styles.picproduct}>
          <Image style={{ width: 200, height: 200, marginBottom:10 }} source={{ uri: this.state.product.image_front_thumb_url }} />
          </View>
          <View style={styles.viewscore}>
          <TouchableOpacity style={styles.buttonTouchable} >
          <Text style={{ color: 'white',fontSize: 20}}> {this.state.product.product_name}</Text>
            <View style={styles.settingScoreIcon}><Icon name='meh-o' color='#FAAF3C' size={50} /><Text style={{ color: 'white',fontSize: 15, paddingLeft:10}} >Average</Text></View>
          </TouchableOpacity>
          </View>
        </View>
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
          /*  topContent={
           <Text style={styles.centerText}>
             scan here
           </Text>
         }*/
          containerStyle={styles.borderColor}
          showMarker={true}
        // bottomContent={
        // scoreinfo

        //}
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
    borderColor: '#00b894'
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
    padding: 16,
  },
  borderColor: {
    alignContent: 'center',
    borderColor: '#00b894',
    alignContent: 'center',
    backgroundColor: 'red'
  },
  viewscore: {

    width: 300,
    height: 100,
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent:'center',
alignItems:'center'

  },
  settingScoreIcon: {
flexDirection:'row',
   // fontFamily: 'Arial',
    //fontSize: 15,
    //color: 'white',
    justifyContent:'center',

    alignItems:'center'

  },
  picproduct: {



  },
  scorePicProductScreen : {

justifyContent:'center',
alignItems:'center'

  }
});