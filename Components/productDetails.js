import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body } from 'native-base';

import ScanButton from './scanButton';
import Tabs from './tabBar';
import ContainerDetailsProduct from './containerDetailsProduct';
import ContainerDetailsAddictives from './containerDetailsAddictives';
import ContainerMoreDetailsProduct from './containerMoreDetailsProduct';
import LogoTitle from './logoTitle';
import ScoreEmoji from './scoreEmoji';


class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }


  valueCheck = (val) => {
    val = (val != '' || val != null) ? val : '';
    return val;
  }


  static navigationOptions = {
    title: 'Details',
    headerStyle: {
      backgroundColor: '#7EAD17',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerTitle: <View><StatusBar
      backgroundColor="#7EAD17"
      barStyle="light-content"
    /><Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Details</Text></View>,
  };


  formatArra = (arr) => {
    if (arr != "undefined")

      return arr.map(element => element.includes("en:") ? element.replace("en:", " ") : element)

    else
      return "";
  };

  formatArraRemoreFr = (arr) => {
    if (arr != "undefined")
      return arr.filter(function (element) { if (!element.includes("fr:")) return element })
    else
      return "";
  }

  formatArraRemoreCountryPref = (arr) => {
    if (arr != "undefined")
      return arr.map(element => element.includes(":") ? element.substring(3) : element)
    else
      return "";
  }

  checkEmptyExistArray = (arr, element) => {

    if (arr.hasOwnProperty(element)) {
      if (arr[element] != "") { return true }
      return false
    }
    else
      return false;

  }

  modeTrim = (mode) => {

    let modeRet = "General";
    let modeRow = JSON.stringify(mode).toLowerCase();
    if ((modeRow.includes("beverages category") == true)) { modeRet = "boissons" };
    if ((modeRow.includes("en:waters") == true)) { modeRet = "eau" };
    if (modeRow.includes("fats category")) { modeRet = "matieres_grasses" };
    if (modeRow.includes("cheeses category")) { modeRet = "fromages" };

    return modeRet;

}
  
  isEmpty = (obj) => {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
  //
  render() {
    const { navigation } = this.props;
    const productInfos = navigation.state.params;
    //alert(itemId);
    let additList = "Not available";
    let ingredients = "Not available";
    let categories = "Not available";
    let vitamins = "Not available";
    let quantity = "Not available";
    let brands = "Not available";
    let stores = "Not available";
    let origins = "Not available";
    let labels = "Not available";
    let manufacturing = "Not available";
    let allergens = "Not available";
    let countries = "Not available";
    if (this.checkEmptyExistArray(productInfos, 'manufacturing_places_tags'))
      ingredients = this.formatArraRemoreFr(this.formatArra(productInfos.ingredients_hierarchy)).toString();

    if (this.checkEmptyExistArray(productInfos, 'categories_hierarchy'))
      categories = this.formatArraRemoreFr(this.formatArra(productInfos.categories_hierarchy)).toString();

    if (this.checkEmptyExistArray(productInfos, 'vitamins_tags'))
      vitamins = this.formatArraRemoreFr(this.formatArra(productInfos.vitamins_tags)).toString();

    if (this.checkEmptyExistArray(productInfos, 'quantity'))
      quantity = productInfos.quantity.toString();

    if (this.checkEmptyExistArray(productInfos, 'brands_tags'))
      brands = this.formatArraRemoreFr(this.formatArra(productInfos.brands_tags)).toString();

    if (this.checkEmptyExistArray(productInfos, 'stores_tags'))
      stores = this.formatArraRemoreFr(this.formatArra(productInfos.stores_tags)).toString();

    if (this.checkEmptyExistArray(productInfos, 'origins_tags'))
      origins = this.formatArraRemoreFr(this.formatArra(productInfos.origins_tags)).toString();

    if (this.checkEmptyExistArray(productInfos, 'labels_tags'))
      labels = this.formatArraRemoreFr(this.formatArra(productInfos.labels_tags)).toString();

    if (this.checkEmptyExistArray(productInfos, 'manufacturing_places_tags'))
      manufacturing = this.formatArraRemoreFr(this.formatArra(productInfos.manufacturing_places_tags)).toString();

    if (this.checkEmptyExistArray(productInfos, 'allergens_tags'))
      allergens = this.formatArraRemoreFr(this.formatArra(productInfos.allergens_tags)).toString();

    if (this.checkEmptyExistArray(productInfos, 'countries_tags'))
      countries = this.formatArraRemoreCountryPref(productInfos.countries_tags).toString();


    if (this.checkEmptyExistArray(productInfos, 'additives_tags'))
      if (productInfos.additives_tags.length > 0) {

        // additList =productInfos.additives_tags.length;
        additList = productInfos.additives_tags.map(function (name, i) {
          return <ContainerDetailsAddictives name={name} key={i} />;
          // return <Text>{name}</Text>
        })
      }
    //ingredients_tags check en: only
    //vitamins_tags
    let fatcom, satcom, sugarcom, saltcomp;
    if (this.checkEmptyExistArray(productInfos.nutriments, 'fat_100g'))
      fatcom = <ContainerDetailsProduct title="Fat" value={this.checkEmptyExistArray(productInfos.nutriments, 'fat_100g') ? productInfos.nutriments['fat_100g'] : <Text></Text>} />
    if (this.checkEmptyExistArray(productInfos.nutriments, 'saturated-fat_100g'))
      satcom = <ContainerDetailsProduct title="Saturated fat" value={this.checkEmptyExistArray(productInfos.nutriments, 'saturated-fat_100g') ? productInfos.nutriments['saturated-fat_100g'] : <Text></Text>} />
    if (this.checkEmptyExistArray(productInfos.nutriments, 'sugars_100g'))
      sugarcom = <ContainerDetailsProduct title="Sugars" value={this.checkEmptyExistArray(productInfos.nutriments, 'sugars_100g') ? productInfos.nutriments['sugars_100g'] : <Text></Text>} />
    if (this.checkEmptyExistArray(productInfos.nutriments, 'salt_100g'))
      saltcomp = <ContainerDetailsProduct title="Salt" value={this.checkEmptyExistArray(productInfos.nutriments, 'salt_100g') ? productInfos.nutriments.salt_100g : <Text></Text>} />

      let  Sugars, Proteins, Fiber, Sodium, SatFat, Fat, Energy, Fruit, Mode;
      if (!this.isEmpty(productInfos.nutriments)) {
        if (productInfos.nutriments.hasOwnProperty('sugars_100g'))
            Sugars = this.valueCheck(productInfos.nutriments['sugars_100g']);

        if (productInfos.nutriments.hasOwnProperty('proteins_100g'))
            Proteins = this.valueCheck(productInfos.nutriments.proteins_100g);

        if (productInfos.nutriments.hasOwnProperty('fiber_100g'))
            Fiber = this.valueCheck(productInfos.nutriments.fiber_100g);

        if (productInfos.nutriments.hasOwnProperty('salt_100g'))
            Sodium = this.valueCheck(productInfos.nutriments.salt_100g);

        if (productInfos.nutriments.hasOwnProperty('saturated-fat_100g'))
            SatFat = this.valueCheck(productInfos.nutriments['saturated-fat_100g']);

        if (productInfos.nutriments.hasOwnProperty('fat_100g'))
            Fat = this.valueCheck(productInfos.nutriments['fat_100g']);

        if (productInfos.nutriments.hasOwnProperty('energy_100g'))
            Energy = this.valueCheck(productInfos.nutriments.energy_100g);
    }


    if (productInfos.hasOwnProperty('fruits-vegetables-nuts_100g_estimate'))
        Fruit = this.valueCheck(productInfos['fruits-vegetables-nuts_100g_estimate']);

    if (productInfos.hasOwnProperty('nutrition_score_debug'))
        Mode = this.modeTrim(this.valueCheck(productInfos.nutrition_score_debug));



    return (
      <View style={styles.container}>
        <Header style={{ height: 110, margin: 10, backgroundColor: '#7EAD1' }} >

          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, alignContent: 'center' }}>
              <Thumbnail style={{ height: 80, width: 80 }} source={{ uri: productInfos.image_front_url }} />
            </View>
            <View style={{ flex: 2, alignContent: 'center' }}>
              <Text  numberOfLines={1} style={{marginTop:5 ,fontSize:18}} >{productInfos.product_name}</Text>
              <Text note>{quantity}</Text>
            

<ScoreEmoji  marginTop={6} energy={Energy} fat={Fat} saturatedFat={SatFat} sugar={Sugars} sod={Sodium} fruit={Fruit} fibre={Fiber} prot={Proteins} mode={Mode} width={150} height = {40}></ScoreEmoji>

              

            </View></View>
        </Header>

        <Tabs  >
          {/* First tab */}
          <View title="" icon="green" icon2="orange" icon3="red" w={20} h={20} style={styles.container}>
            <View style={{ flex: 1, marginHorizontal: 10 }}>
              <ScrollView>
                {fatcom}
                {satcom}
                {sugarcom}
                {saltcomp}
                <View style={{ marginBottom: 50 }}></View>
              </ScrollView>
            </View>
          </View>
          {/* Second tab */}
          <View title="Additives" icon="transparent" icon2="transparent" icon3="transparent" w={0} h={0} style={styles.container}>
            <View style={{ flex: 1, marginHorizontal: 10 }}>
              <ScrollView>
                {additList}
                <View style={{ marginBottom: 50 }}></View>
              </ScrollView>
            </View>
          </View>
          {/* Third tab */}
          <View title="More" icon="transparent" icon2="transparent" icon3="transparent" w={0} h={0} style={styles.container}>
            <View style={{ flex: 1, marginHorizontal: 10 }}>
              <ScrollView>
                <ContainerMoreDetailsProduct title="Categories" value={categories} />
                <ContainerMoreDetailsProduct title="Ingredients" value={ingredients} />
                <ContainerMoreDetailsProduct title="Vitamins" value={vitamins} />
                <ContainerMoreDetailsProduct title="Quantity" value={quantity} />
                <ContainerMoreDetailsProduct title="Brands" value={brands} />
                <ContainerMoreDetailsProduct title="Stores" value={stores} />
                <ContainerMoreDetailsProduct title="Origin of ingredients" value={origins} />
                <ContainerMoreDetailsProduct title="Labels, certifications, awards" value={labels} />
                <ContainerMoreDetailsProduct title="Manufacturing or processing places" value={manufacturing} />
                <ContainerMoreDetailsProduct title="Allergens" value={allergens} />
                <ContainerMoreDetailsProduct style={{ marginBottom: 50 }} title="Countries where sold" value={countries} />
                <View style={{ marginBottom: 50 }}></View>
              </ScrollView>
            </View>
          </View>
        </Tabs>
       
      </View>
    );
  }
}

export default ProductDetails;

const styles = StyleSheet.create({
  // App container
  container: {
    flex: 1,                            // Take up all screen
    backgroundColor:'#fff'
    // Background color
  },
  // Tab content container
  content: {
    flex: 1,
    color: 'grey',                           // Take up all available space
    justifyContent: 'flex-start',           // Center vertically
    alignItems: 'flex-start',               // Center horizontally
    backgroundColor: '#FFFFFF',         // Darker background for content area
  },
  // Content header
  header: {
    margin: 10,                         // Add margin
    color: 'grey',                   // White color
    fontFamily: 'Avenir',               // Change font family
    fontSize: 15,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,

  },
  // Content text
  text: {
    color: 'grey', // Semi-transparent text
    textAlign: 'left',                // Center
    fontFamily: 'Avenir',
    fontSize: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#4C64FF',
    padding: 15,
    marginLeft: 1,
    marginRight: 1,
    width: 198
  }
});