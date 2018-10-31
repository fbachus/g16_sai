import React, {Component} from 'react';
import { StyleSheet, Text, Image, View , ScrollView, TouchableOpacity , Alert, TextInput} from 'react-native';

import { createStackNavigator } from 'react-navigation';


export default class SignInMail extends React.Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    
  
    
render() {

    let stylin =styles.buttons;

      let counter = 0;
  
      if (counter >=1) {
          stylin = styles.buttoneins
      }

    return (

        <View style={styles.container}>

        <Text style={styles.header}> 
            Your email address
        </Text>

            <TextInput
                style={styles.inputBox}
                placeholder="E-Mail Adress"
                onChangeText={(text) => this.setState({text})}
                onPress={counter++}
                value={this.state.text} />

        <TouchableOpacity style={styles.button1}>
                <Text style={styles.textCreateAccount}>
                    Next
                </Text>
        </TouchableOpacity>

        <TouchableOpacity style={stylin}>
                <Text style={styles.alreadyAccount}>
                    Already have an account? <Text style={{color: '#F2994A'}}>  Log in.</Text>
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

    header: {
        fontFamily: 'Avenir Next',
        fontSize: 24,
        textAlign: 'center',
        top: 60,
    },

    inputBox: {
        color: '#C4C5CA',
        height:44,
        width: 288,
        backgroundColor: '#FAFAFA',
        borderRadius: 6,
        borderWidth: 0.5,
        borderColor: '#CACACA',
        left: 43,
        top: 84,
        textAlign: 'center'
    },
    button1: {
        width: 288,
        height:50,
        borderRadius: 8,
        borderWidth: 0.5,
        backgroundColor: '#F2994A',
        borderColor: '#F2994A',
        left: 43,
        top: 108,
    },

    textCreateAccount: {
        fontFamily: 'Avenir Next',
        fontSize: 17,
        fontWeight: '600',
        textAlign: 'center',
        color: 'white',
        top: 13,
    },

    buttons: {
        width: 375,
        height: 44,
        top: 480,
        borderWidth: 0.5,
        backgroundColor: 'white',
        borderColor: '#999999',
    },

    buttoneins: {
        width: 375,
        height: 44,
        top: 350,
        borderWidth: 0.5,
        backgroundColor: 'white',
        borderColor: '#999999',
    },

    alreadyAccount: {
        fontFamily: 'Avenir Next',
        fontSize: 13,
        fontWeight: '500',
        textAlign: 'center',
        top: 13,
    },

});
