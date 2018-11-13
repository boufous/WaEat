import React, { Component } from 'react';
import { Image, StyleSheet, View, ActivityIndicator, Animated, Easing } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body } from 'native-base';
import axios from "axios";
import ScoreEmoji from './scoreEmoji';
import ScanAgain from './scanAgain';
class ProductScan extends Component {

    constructor(props) {
        super(props);

        const { navigation } = this.props;
        const productInfos = navigation.state.params;

        //live 
        this.state = {
            product: productInfos.product,
            displayproductscore: productInfos.displayproductscore

        };

        // this.state = {
        //     product: {},
        //     displayproductscore: false

        // };

    }

    componentWillMount() {
        this.animatedValue = new Animated.Value(1);
    }

    componentDidMount() {

        /// tbd
        // const URL = `https://world.openfoodfacts.org/api/v0/product/3073786865191.json`;
        // axios
        //     .get(URL)
        //     .then(res => {
        //         this.setState({ product: res.data.product, displayproductscore: true });
        //     })
        //     .catch(err => console.log(err));

        ///
        Animated.timing(this.animatedValue, {

            toValue: 550,
            duration: 1500,
            easing: Easing.bounce

        }).start()
    }


    valueCheck = (val) => {
        if (typeof (val) !== 'undefined' || val != null)
            return val;
        else
            return 'Undefined';
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

     isEmpty=(obj)=> {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    render() {

        const animatedStyle = { height: this.animatedValue }
        //this.setState({ product: productInfos });

        //N => Densité énergétique (kJ/100g) - Graisses saturées (g/100g) - Sucres simples (g/100g) - Sodium1 (mg/100g)
        //P => Fruits et légumes, légumineuses et fruits à coque (g/100g)1 (%) - Fibres(g/100g) - Protéines (g/100g)  
        const { navigate } = this.props.navigation;
        let ProductImage, ProductName, Sugars, Proteins, Fiber, Sodium, SatFat, Fat, Energy;
        let productURL="Unv";

        if (this.state.displayproductscore) {

            if (!this.isEmpty(this.state.product)) {
                ProductImage = this.valueCheck(this.state.product.image_front_url);
                ProductName = this.valueCheck(this.state.product.product_name);
                productURL=ProductImage;

                if (!this.isEmpty(this.state.product.nutriments)) {

                    Sugars = this.valueCheck(this.state.product['sugars_100g']);
                    Proteins = this.valueCheck(this.state.product.nutriments.proteins_100g);
                    Fiber = this.valueCheck(this.state.product.nutriments.fiber_100g);
                    Sodium = this.valueCheck(this.state.product.nutriments.salt_100g);
                    SatFat = this.valueCheck(this.state.product.nutriments['saturated-fat_100g']);
                    Fat = this.valueCheck(this.state.product.nutriments['fat_100g']);
                    Energy = this.valueCheck(this.state.product.nutriments.energy_100g);
                }


                let Fruit = this.valueCheck(this.state.product['fruits-vegetables-nuts_100g_estimate']);
                let Mode = this.modeTrim(this.valueCheck(this.state.product.nutrition_score_debug));
               
if(productURL=="Unv" ||productURL==""||productURL=='Undefined')
productURL=<Thumbnail style={{ height: 150, width: 150 }}  source={require('../resources/picsHelper/no_image_available_3.jpg')}></Thumbnail>;
else
// productURL=<Thumbnail style={{ height: 150, width: 150 }} source={{ uri: ProductImage }} />
productURL=<Text>{productURL}</Text>


                return (
                    <View style={styles.container}>
                        <Animated.View style={[styles.box, animatedStyle]} >
                            <Container>
                                <View style={styles.container}>
                                    <View elevation={5} style={styles.buttonContainer}>
                                        {productURL}
                                        <Text style={{ marginTop: 6, fontSize: 20 }}>{ProductName}</Text>
                                        <ScoreEmoji energy={Energy} fat={Fat} saturatedFat={SatFat} sugar={Sugars} sod={Sodium} fruit={Fruit} fibre={Fiber} prot={Proteins} mode={Mode}></ScoreEmoji>
                                    </View>
                                    <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', }}>
                                        <Button bordered success onPress={() => navigate('ProductDetails', this.state.product)}>
                                            <Text>More details</Text>
                                        </Button>
                                    </View>
                                </View>
                            </Container>
                        </Animated.View>
                    </View>
                );
            }
            else return <View style={styles.container}>
            <Animated.View style={[styles.box, animatedStyle]} >
                <Container>
                    <View style={styles.container}>
                        <View elevation={5} style={styles.buttonContainer}>
                        <Thumbnail style={{ height: 150, width: 150 }}  source={require('../resources/picsHelper/no_image_available_3.jpg')}></Thumbnail>
                        <Text>Sorry, this item doesn't not exist yet in our database.</Text>
                        </View>
                        <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', }}>
                            <Button bordered success onPress={() =>navigate('HomeScreen')}>
                                <Text>Scan new Item</Text>
                            </Button>
                        </View>
                    </View>
                </Container>
            </Animated.View>
        </View>
        }
        else return <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#7EAD17" />
        </View>
    }
}

export default ProductScan;



// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center'
//     },
//     horizontal: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         padding: 10
//         // paddingTop: (Platform.OS) === 'ios' ? 20 : 0
//     },

// })



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    textStyle: {
        color: '#FFFFFF'
    },
    buttonContainer: {
        flex: 6,
        marginVertical: 40,
        paddingVertical: 20,
        paddingHorizontal: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#2E9298',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
    },
    box: {
        backgroundColor: '#333',
        width: 400,
        height: 400

    }
})

