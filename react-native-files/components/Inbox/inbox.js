import React, {Component} from 'react';
import { StyleSheet, Text, Image, View , ScrollView, TouchableOpacity , Alert, px} from 'react-native';
import Navbarinbox from '../Navbar/navbar-inbox';
import { createStackNavigator } from 'react-navigation';



export default class Inbox extends React.Component {
    static navigationOptions = {
        header: null
    }
    
    
render() {
      
    return (

        <View style={styles.ocontainer}>

        <Navbarinbox/>
            <ScrollView style={styles.container}>
                Halts Maul
                

            </ScrollView>

    </View>
    )
  }

}


const styles = StyleSheet.create({

    ocontainer: {
        flex:10,
    },

    container: {
        flex: 5,
        backgroundColor: 'white',
    },

    
});

