import React, { Component } from 'react';
import { View, StyleSheet, Image, StatusBar } from 'react-native';
import { Container, Header, Content, Card, Title,CardItem, Text, Body, Left,Right,Icon } from 'native-base';
import ScanButton from './scanButton';
import LogoTitle from './logoTitle';


class Help_WE extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
    title: 'How it works?',
    headerStyle: {
      backgroundColor: '#7EAD17',
    },

    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerTitle: <View style={{ flex: 1, backgroundColor: '#7EAD17', alignItems: 'center' }}><LogoTitle style={{ alignSelf: 'center' }} /></View>,


  };

  //   <Header backgroundColor="#7EAD17"></Header>

  render() {
    return (

      <Container>
      
        <Header style ={{backgroundColor:'#7EAD17'}}>
        <StatusBar
    backgroundColor="#7EAD17"
    barStyle="light-content"
  />
          <Body>
          <View style={{ flexDirection:'row' }}>
          <View style={{ flexDirection:'row',flex: 2,justifyContent:'flex-start', alignContent:'flex-start', alignItems:'center'}}><Title>How it Works?</Title></View>
          <View style={{ flexDirection:'row',flex: 3,justifyContent:'flex-start', alignContent:'flex-start', alignItems:'center'}}><LogoTitle  /></View></View>
            
           
          </Body>
              
              
         </Header>



            <Content padder>
              <Card>
                <CardItem header style={{ borderWidth: 1, borderColor: '#dcdde1' }}>
                  <Text style={{ color: '#7EAD17' }}>The Nutrient Profiling Model</Text>
                </CardItem>
                <CardItem >
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
                <CardItem header style={{ borderWidth: 1, borderColor: '#dcdde1' }}>
                  <Text style={{ color: '#7EAD17' }}> What is “Nutri-Sore” labelling?</Text>
                </CardItem>
                <CardItem >
                  <Body>
                    <Image
                      source={require('../resources/picsHelper/nutriscore.png')}
                      style={{ alignItems: 'center', width: 200, height: 100 }}
                    />
                    <Text>It is a five color Front-to-Pack nutrition labelling to help consumers make healthier food choices at the time of purchase. Through a letter and a color scheme, it informs consumers about the nutritional quality of a product. Each product is therefore positioned on a scale with five levels, ranging from A – the most nutritionally favorable product – to E – the least nutritionally favorable product. The category to which the food belongs is highlighted on the logo by a larger letter.
    
                </Text></Body>
                </CardItem>

                <CardItem header style={{ borderWidth: 1, borderColor: '#dcdde1' }}>
                  <Text style={{ color: '#7EAD17' }}> How is this score calculated?</Text>
                </CardItem>
                <CardItem bordered>
                  <Body><Text>To classify each product, a nutritional profile system was developed which takes into account nutrient content per 100g for food and beverages. The system ranks food in a scale from -15, for the most healthy foods, to +40, for the less healthy foods. The positive points are given based on the content of energy, sugars, saturated fatty acids and salt while the negative points are given based on content of fruit, vegetables and nuts, fiber and protein. After calculation, the score obtained allows to assign a letter and a color to a product.
                </Text></Body>
                </CardItem>

                <CardItem header style={{ borderWidth: 1, borderColor: '#dcdde1' }}>
                  <Text style={{ color: '#7EAD17' }}> Benefits of this system?</Text>
                </CardItem>
                <CardItem bordered>
                  <Body><Text>This nutritional score system allows consumers to situate the nutritional quality of foods in three dimensions meaning, it allows consumers to compare the nutritional values of products across different categories (e.g. biscuits vs dairy products), within the same category and within the same food offered by different brands. Additionally, it works as an incentive for manufactures to reformulate their products towards healthier formulations. Also, it has the potential to support professionals when giving nutritional advice.
    
    At the end the main goal of this labelling system is to support and promote healthier eating habit. If you would like to know more about the effectiveness of “Nutri-Score” labelling
      </Text></Body>
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
        },
  titleh: {
            color: 'grey', // Semi-transparent text
          textAlign: 'left',                // Center
          fontFamily: 'Avenir',
          fontSize: 10,
        },
      });
      
