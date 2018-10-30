import React, {Component} from 'react';
import { StyleSheet, Text, Image, View , ScrollView, TouchableOpacity , Alert, px} from 'react-native';

import { createStackNavigator } from 'react-navigation';


export default class SignLogInMenu extends React.Component {
    static navigationOptions = {
        header: null
    }
    
    
render() {
      
    return (

        <View style={styles.container}>
            <Text style={styles.placeholder}>
                Placeholder
            </Text>

            <TouchableOpacity style={styles.button1}>
                <Text style={styles.textCreateAccount}>
                    Create New Account
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button2}>
                <Text style={styles.textLogIn}>
                    Log In
                </Text>
            </TouchableOpacity>

        </View>
    )
  }

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
       
    },

    placeholder: {
        fontFamily: 'Avenir Next',
        fontSize: 24,
        fontWeight: '500',
        textAlign: 'center',
        letterSpacing: -1,
        top: 190,
    },

    button1: {
        width: 288,
        height:50,
        borderRadius: 8,
        borderWidth: 0.5,
        backgroundColor: '#F2994A',
        borderColor: '#F2994A',
        left: 43,
        top: 240,
    },

    textCreateAccount: {
        fontFamily: 'Avenir Next',
        fontSize: 17,
        fontWeight: '600',
        textAlign: 'center',
        color: 'white',
        top: 13,
    },

    textLogIn: {
        fontFamily: 'Avenir Next',
        fontSize: 17,
        fontWeight: '500',
        textAlign: 'center',
        top:264,
    },

});