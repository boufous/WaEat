import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { Thumbnail,Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';


class ScanButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { navigate } = this.props.navigation;
        return (

 <TouchableOpacity
 style={{
     borderWidth:1,
     borderColor:'#7EAD17',
     alignItems:'center',
     justifyContent:'center',
     width:80,
     height:80,
     backgroundColor:'#fff',
     borderRadius:100,
     shadowColor: '#7EAD17',// IOS
        shadowOffset: {// IOS
            width: 1,
            height: 1
        },
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 10, // Android
   }}
   onPress={() =>navigate('HomeScreen')}>
<Thumbnail square style={{ height: 40, width: 40 }}  source={require('../resources/picsHelper/ScanIcon.png')}></Thumbnail>
</TouchableOpacity>
        );
    }
}

export default ScanButton;
{/* <Icon name={"chevron-right"}  size={30} color="#01a699" /> */}
