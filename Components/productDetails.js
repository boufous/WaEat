import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
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
      <Container>
        <Header hasTabs />
        <Tabs>
          <Tab heading={<TabHeading><Icon name="camera" /><Text>Details</Text></TabHeading>}>
            <Text>{JSON.stringify(productInfos)}</Text>
          </Tab>
          <Tab heading={<TabHeading><Text>No Icon</Text></TabHeading>}>
            <Text>tab2</Text>

          </Tab>
          <Tab heading={<TabHeading><Icon name="apps" /></TabHeading>}>
            <Text>tab3</Text>

          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default ProductDetails;
