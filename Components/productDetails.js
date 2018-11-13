import React, { Component } from 'react';
import { View,StyleSheet } from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Icon,Thumbnail, Text, Button,Footer } from 'native-base';
import ScanButton from './scanButton';
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

  render() {
    const { navigation } = this.props;
    const productInfos = navigation.state.params;
    //alert(itemId);
  
    return (
      <Container >
        {/* <Header hasTabs /> */}                                     
        <Tabs  >
         
        <Tab  heading={<TabHeading><Thumbnail style={{width: 20, height: 20, borderRadius: 30/2}} source={require('../resources/picsHelper/green.png')} /><Text>Good</Text></TabHeading>}>
          </Tab>
          <Tab heading={<TabHeading><Thumbnail style={{width: 20, height: 20, borderRadius: 30/2}}  source={require('../resources/picsHelper/red.png')} /><Text>Bad</Text></TabHeading>}>
            <Text>tab2</Text>
          </Tab>
          <Tab heading={<TabHeading><Icon name="apps" /><Text>More</Text></TabHeading>}>
            <Text>tab3</Text>
          </Tab>
        </Tabs>
        <Footer style={{marginBottom:30, backgroundColor:'#fff'}}><ScanButton navigation={this.props.navigation}/></Footer>
      
       
      </Container>
       
    );
  }
}

export default ProductDetails;

