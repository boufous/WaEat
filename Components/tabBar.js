import React, { Component } from 'react';
import {
  StyleSheet,         // CSS-like styles
  Text,               // Renders text
  TouchableOpacity,   // Pressable container
  View ,
  ScrollView              // Container component
} from 'react-native';
import {   Thumbnail  } from 'native-base';

export default class Tabs extends Component {

  // Initialize State
  state = {
    // First tab is active by default
    activeTab: 0
  }

  // Pull children out of props passed from App component
  render({ children } = this.props) {
    return (
      <View style={styles.container}>
        {/* Tabs row */}
        <View style={styles.tabsContainer}>
          {/* Pull props out of children, and pull title out of props */}
          {children.map(({ props: { title,icon,icon2,icon3, w, h } }, index) =>
            <TouchableOpacity
              style={[
                // Default style for every tab
                styles.tabContainer,
                // Merge default style with styles.tabContainerActive for active tab
                index === this.state.activeTab ? styles.tabContainerActive : []
              ]}
              // Change active tab
              onPress={() => this.setState({ activeTab: index }) }
              // Required key prop for components generated returned by map iterator
              key={index}
            >
             <Text style={styles.tabText}>
                {title} 
              </Text>
<TouchableOpacity
 style={{
     alignItems:'center',
     justifyContent:'center',
     width:w,
     height:h,
     marginRight:6,
     
     backgroundColor:icon,
     borderRadius:100, 
   }}
   activeOpacity={1}
   onPress={() => this.setState({ activeTab: index }) }
   >
</TouchableOpacity>
<TouchableOpacity
 style={{
     alignItems:'center',
     justifyContent:'center',
     width:w,
     height:h,
     marginRight:6,
     
     backgroundColor:icon2,
     borderRadius:100, 
   }}
   activeOpacity={1}
   onPress={() => this.setState({ activeTab: index }) }
   >
</TouchableOpacity>
<TouchableOpacity
 style={{
     alignItems:'center',
     justifyContent:'center',
     width:w,
     height:h,
     marginRight:6,
     
     backgroundColor:icon3,
     borderRadius:100, 
   }}
   activeOpacity={1}
   onPress={() => this.setState({ activeTab: index }) }
   >
</TouchableOpacity>


             
            </TouchableOpacity>
          )}
        </View>
        {/* Content */}
        <ScrollView style={styles.contentContainer}>
          {children[this.state.activeTab]}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // Component container
  container: {
    flex: 1,   
                             // Take up all available space
  },
  // Tabs row container
  tabsContainer: {
    flexDirection: 'row',   
                // Arrange tabs in a row
  },
  // Individual tab container
  tabContainer: {
    flex: 1,       
    flexDirection:'row',
    justifyContent: 'center',           // Center vertically
    alignItems: 'center',                     // Take up equal amount of space for each tab
    paddingVertical: 15,                // Vertical padding
    borderBottomWidth: 1,               // Add thick border at the bottom
    borderBottomColor: '#c8d6e5',   // Transparent border for inactive tabs
  },
  // Active tab container
  tabContainerActive: {
    borderBottomColor: '#7EAD17',       // White bottom border for active tabs
   backgroundColor:'rgba(126, 173, 23, 0.3)'
},
  // Tab text
  tabText: {
    color: 'grey',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // Content container
  contentContainer: {
    flex: 1                             // Take up all available space
  }
});