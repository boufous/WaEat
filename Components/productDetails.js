import React, { Component } from 'react';
import { View, Text,Image ,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


class ProductDetails extends Component {
     
     
    render() {
        return (
            <View  >
                <View >
                    <Image style={{ width: 200, height: 200, marginBottom: 10 }} source={{ uri: this.props.image }} />
                </View>
                <View >
                    <TouchableOpacity  >
                        <Text style={{ color: 'grey', fontSize: 20 }}> {this.props.name}</Text>
                        <View  ><Icon name='meh-o' color='#FAAF3C' size={50} />
                            <Text style={{ color: 'grey', paddingTop: 6, fontSize: 15, paddingLeft: 10 }} >Average</Text></View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default ProductDetails;
