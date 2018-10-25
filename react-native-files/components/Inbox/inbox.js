import React, {Component} from 'react';
import { StyleSheet, Text, Image, View , ScrollView, TouchableOpacity , Alert, px} from 'react-native';
import Navbarinbox from '../Navbar/navbar-inbox';
import InboxAllLines from './inbox-allLines';

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
        <TouchableOpacity>
            <InboxAllLines/>
        </TouchableOpacity>  

        <TouchableOpacity>
            <InboxAllLines/>
        </TouchableOpacity>  

        <TouchableOpacity>
            <InboxAllLines/>
        </TouchableOpacity>  

        <TouchableOpacity>
            <InboxAllLines/>
        </TouchableOpacity>  

        <TouchableOpacity>
            <InboxAllLines/>
        </TouchableOpacity>  

        <TouchableOpacity>
            <InboxAllLines/>
        </TouchableOpacity>  
            
        </ScrollView>

    </View>
    )
  }

}


const styles = StyleSheet.create({

    ocontainer: {
        flex:1,
        
        
    },

    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    
});

