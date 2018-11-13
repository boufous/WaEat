import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body,Icon, Right } from 'native-base';


class Help_WE extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
 
        <Container>
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text style={{color:'#7EAD17'}}>The Nutrient Profiling Model</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>The nutrient profiling model was developed by the Food Standards Agency (FSA) in 2004-
  2005 to provide Ofcom, the broadcast regulator, with a tool to differentiate of foods on the
  basis of their nutritional composition, in the context of television advertising foods to children.
  The model uses a simple scoring system where points are allocated on the basis of the
  nutrient content of 100g of a food or drink. Points are awarded for ‘A’ nutrients (energy,
  saturated fat, total sugar and sodium), and for ‘C’ nutrients (fruit, vegetables and nut content,
  fibre and protein). The score for ‘C’ nutrients is then subtracted from the score for ‘A’ nutrients
to give the final nutrient profile score.  </Text>
              </Body>
            </CardItem>
         
          </Card>
        </Content>
      </Container>
 
    );
  }
}

export default Help_WE;


{/* <Container>
<Header />
<Content>
  <Card>
    <CardItem>
      <Icon active name="logo-googleplus" />
      <Text>Google Plus</Text>
      <Right>
        <Icon name="arrow-forward" />
      </Right>
     </CardItem>
   </Card>
</Content>
</Container> */}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    //backgroundColor: "#F5FCFF",
    textAlign: "center",
  },
  text: {
    fontSize: 10,
    margin: 10



  }
});


