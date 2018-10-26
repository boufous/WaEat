import React,{Component} from "react";
import {
  AppRegistry,
  StyleSheet,
  Text, Alert,
  TouchableOpacity,
  Linking,
} from 'react-native';
import axios from "axios";
import QRCodeScanner from 'react-native-qrcode-scanner';


class ScanScreen extends Component {
  constructor() {
    super();
    this.state = {
      product: {}
    }
  }


  onSuccess(e) {
    //Linking
    //.openURL(e.data)
    //.catch(err => console.error('An error occured', err));
    var isnum = /^\d+$/.test(e.data);
    // Alert.alert(typeof e.data);
    //  Alert.alert('isnum ' + isnum);
    if (isnum) {
    //  getProductInfo(e.data)(res => this.setState({ product: res.data }));
    // const URL = `https://world.openfoodfacts.org/api/v0/product/${e.data}.json`;

    const URL = `https://world.openfoodfacts.org/api/v0/product/5052320289240.json`;
    
  axios
 .get(URL)
 .then(res => this.setState({ product: res.data.product }))
 .catch(err => console.log(err))
    }
    else {
      Alert.alert(' :( Not a valid barcode!');
    }

  }

  render() {

    let ingredients;

    if (this.state.product!=null) {
      ingredients = <Text >{this.state.product.max_imgid}</Text>;
    } else {
      ingredients = <Text >no data</Text>;
    }

    return (
      <QRCodeScanner
        onRead={this.onSuccess.bind(this)}
        topContent={
          <Text style={styles.centerText}>
            scan here
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>See more detailsss</Text>
                {ingredients}
          </TouchableOpacity>
        }
      />
    );
  }
}
export default ScanScreen;

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});