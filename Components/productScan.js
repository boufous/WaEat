import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image, StyleSheet, View, ActivityIndicator } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body } from 'native-base';
import axios from "axios";

class ProductScan extends Component {

    constructor(props) {
        super(props);

        const { navigation } = this.props;
        const productInfos = navigation.state.params;
        this.state = {
            //  product: productInfos,  
            product: {},
            displayproductscore: false

        };

    }

    componentDidMount() {

        /// tbd
        const URL = `https://world.openfoodfacts.org/api/v0/product/5052320289240.json`;
        axios
            .get(URL)
            .then(res => {
                this.setState({ product: res.data.product, displayproductscore: true });
            })
            .catch(err => console.log(err));

        ///


    }

    valueCheck = (val) => {
        val = (val != '' || val != null) ? val : '';
        return val;
    }

    render() {


        //this.setState({ product: productInfos });
        let ProductImage = this.valueCheck(this.state.product.image_front_url);
        let ProductName = this.valueCheck(this.state.product.product_name);
        // let Sugars = this.valueCheck(this.state.product.nutriments.sugars_100g);
        // let Proteins = this.valueCheck(this.state.product.nutriments.proteins_100g);
        // let Fiber = this.valueCheck(this.state.product.nutriments.fiber_100g);
        // let Sodium = this.valueCheck(this.state.product.nutriments.sodium_100g);
        // let Fat = this.valueCheck(this.state.product.nutriments['saturated-fat_100g']);
        // let Energy = this.valueCheck(this.state.product.nutriments.energy_100g);
        const { navigate } = this.props.navigation;
        if (this.state.displayproductscore) {
            return (

                <Container>
                    <View style={styles.container}>
                        <View elevation={5} style={styles.buttonContainer}>
                            <Thumbnail style={{ height: 150, width: 150 }} source={{ uri: ProductImage }} />
                            <Text style={{ marginTop: 6, fontSize: 20 }}>{ProductName}</Text>
                            <View style={{ marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>

                                <Icon name='smile-beam' color='#26B867' size={40} />
                                <Text > Excelent</Text>
                            </View>
                        </View>
                        <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', }}>

                            <Button   bordered success onPress={() => navigate('ProductDetails', this.state.product)}>
                                <Text>More details</Text>
                            </Button>
                        </View>
                    </View>

                </Container>

            );
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
        marginVertical:40,
        paddingVertical: 20,
        paddingHorizontal:50,
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
    }
})

