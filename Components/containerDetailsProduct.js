import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Right, Body } from "native-base";


class ContainerDetailsProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  colorOutput = (title, value) => {

    if (title === "Fat") {
      if (value < 3) return 'green';
      else if (3 <= value && value < 20) return 'orange';
      else if (value >= 20) return 'red';
    }
    if (title === "Saturated fat") {
      if (value < 1.5) return 'green';
      else if (1.5 <= value && value < 5) return 'orange';
      else if (value >= 5) return 'red';
    }
    if (title === "Sugars") {
      if (value < 5) return 'green';
      else if (5 <= value && value < 12.5) return 'orange';
      else if (value >= 12.5) return 'red';
    }
    if (title === "Salt") {
      if (value < 0.3) return 'green';
      else if (0.3 <= value && value < 1.5) return 'orange';
      else if (value >= 1.5) return 'red';
    }
    else return "";
  }

  description =(color)=>{
if (color=="green"){return "Low quantity" ;}
else 
if(color=="orange"){return "Moderate quantity" ;}
else
if(color=="red"){return "High quantity";}
else
return "";


  }

  render() {

    let color = this.colorOutput(this.props.title, this.props.value);
    let description =this.description(color);
    return (
      <Card>
        <CardItem header style={{ borderBottomWidth: 1, borderBottomColor: '#dcdde1' }}>
          <Body><Text style={{ color: 'grey' , fontWeight: 'bold', }}>{this.props.title}<Text style={{ fontSize: 12,color:'grey'}}> (100g)</Text></Text></Body>

          <Right>
            <TouchableOpacity
              style={{
                width: 20,
                height: 20,
                backgroundColor: color,
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
              {description}
            </Text></Body>
          <Right><Text> {this.props.value}g</Text></Right>

        </CardItem>
      </Card>

    );
  }
}

export default ContainerDetailsProduct;


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