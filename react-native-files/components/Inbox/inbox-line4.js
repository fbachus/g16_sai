import React, {Component} from 'react';
import { StyleSheet, Text, Image, View , ScrollView, TouchableOpacity , Alert, px} from 'react-native';

import { createStackNavigator } from 'react-navigation';



export default class InboxLine4 extends React.Component {
    static navigationOptions = {
        header: null
    }
    
    
render() {
      
    return (

        <View>
            <ScrollView>

            <View style={styles.container}>
                <Text style={styles.line}>
                _________________________________________________________
                </Text>
                </View>
            </ScrollView>

    </View>
    )
  }

}


const styles = StyleSheet.create({

    line:{
        color: '#BCBBC1',
        marginLeft: 35,
        fontWeight: 'bold',
    },


});