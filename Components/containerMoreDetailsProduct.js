import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Right, Body } from "native-base";
class ContainerMoreDetailsProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        return (
            <Card>
                <CardItem header style={{ borderBottomWidth: 1, borderBottomColor: '#dcdde1' }}>
                    <Body><Text style={{ color: 'grey', fontWeight: 'bold', }}> <Text style={{ fontSize: 12, color: 'grey' }}>{this.props.title}</Text></Text></Body>
                </CardItem>
                <CardItem >
                    <Body>
                        <Text style={styles.text}>
                            {this.props.value}
                        </Text></Body>
                </CardItem>
            </Card>

        );
    }
}

export default ContainerMoreDetailsProduct;


const styles = StyleSheet.create({
    // App container
    container: {
        flex: 1,                            // Take up all screen
        backgroundColor: '#FFFFFF',
        // Background color
    },

    // Content text
    text: {
        color: 'grey', // Semi-transparent text
        textAlign: 'left',                // Center
        fontFamily: 'Avenir',
        fontSize: 12,
    },
});