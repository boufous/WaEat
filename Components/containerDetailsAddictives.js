import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Right, Body } from "native-base";
import additives from './additivesRep';

class ContainerDetailsAddictives extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

   

    findAddi = (arr, propName, propValue) => {
        for (var i = 0; i < arr.length; i++)
            if (arr[i][propName].includes(propValue))
                return arr[i];
                 

        // will return undefined if not found; you could return a default instead
    }


    addcolor = (ind) => {

        if(ind.includes("Low risks")) return 'green';
        else
        if(ind.includes("Moderate risks")) return 'orange';
        else
        if(ind.includes("High risks")) return 'red';
        else
        return "#dcdde1";
      



    }


    render() {

        let capitalLetter=  this.props.name.substring(3).charAt(0).toUpperCase();

         let resultAdd = this.findAddi(additives, "name",  capitalLetter+ this.props.name.substring(4));
       let addName = resultAdd!={}&&(typeof resultAdd!='undefined')?resultAdd.name:"";
        let addDesc =  resultAdd!={}&&(typeof resultAdd!='undefined')?resultAdd.desc:"";
        let addColor = this.addcolor(addDesc);

        if(addDesc!="") 
        addDesc = addDesc  
        else  addDesc = "-"


        return (
            <Card>
                <CardItem header style={{ borderBottomWidth: 1, borderBottomColor: '#dcdde1' }}>
                    <Body><Text style={{ color: 'grey',  fontWeight: 'bold', }}> <Text style={{ fontSize: 12, color: 'grey' }}>{addName}</Text></Text></Body>

                    <Right>
                        <TouchableOpacity
                            style={{
                                width: 20,
                                height: 20,
                                backgroundColor: addColor,
                                borderRadius: 100,
                            }}
                            activeOpacity={1}
                        >
                        </TouchableOpacity>
                    </Right>
                </CardItem>
                <CardItem >
                    <Body>
                        <Text style={styles.text}>
                        {addDesc}
                        </Text></Body>

                </CardItem>
            </Card>

        );
    }
}

export default ContainerDetailsAddictives;


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