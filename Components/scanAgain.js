import React, { Component } from 'react';
import { Image, StyleSheet, View, ActivityIndicator, Animated, Easing } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body } from 'native-base';
import ScanButton from './scanButton';

class ScanAgain extends Component {

    constructor(props) {
        super(props);
    }


    componentWillMount() {
        this.animatedValue = new Animated.Value(1);
    }

    componentDidMount() {

        Animated.timing(this.animatedValue, {

            toValue: 400,
            duration: 1500,
            easing: Easing.bounce

        }).start()
    }


    static navigationOptions = {
        title: 'Scan Again',
        headerStyle: {
            backgroundColor: '#7EAD17',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render() {

        const animatedStyle = { height: this.animatedValue }
        //this.setState({ product: productInfos });

        //N => Densité énergétique (kJ/100g) - Graisses saturées (g/100g) - Sucres simples (g/100g) - Sodium1 (mg/100g)
        //P => Fruits et légumes, légumineuses et fruits à coque (g/100g)1 (%) - Fibres(g/100g) - Protéines (g/100g)  
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <Animated.View style={[styles.box, animatedStyle]} >
                    <Container>
                        <View style={styles.container}>
                            <View elevation={5} style={styles.buttonContainer}>
                                <Thumbnail style={{ height: 150, width: 150 }} source={require('../resources/picsHelper/no_image_available_3.jpg')}></Thumbnail>
                                <Text numberOfLines={2} style={{ textAlign: 'center', marginTop: 6, fontSize: 20 }}>>Sorry, this item doesn't not exist yet in our database.</Text>
                            </View>
                            <View style={{ flex: 0, alignItems: 'flex-end', justifyContent: 'flex-end', backgroundColor: '#fff', }}>
                                {/* <Button bordered success onPress={() =>navigate('HomeScreen')}>
                                        <Text>Scan new Item</Text>
                                    </Button> */}
                                <ScanButton navigation={this.props.navigation} />

                            </View>
                        </View>
                    </Container>
                </Animated.View>

            </View>
        );

    }
}

export default ScanAgain;





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
        width: 350,
        height: 350

    }
})

