import React, {Component} from 'react';
import { StyleSheet, Text, Image, View , ScrollView, TouchableOpacity , Alert, TextInput} from 'react-native';
import LoginPassword from './login-password'

import { createStackNavigator } from 'react-navigation';


export default class Login extends React.Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = { text: '' };
      }
    
    
render() {
      
    return (

        <View style={styles.container}>

        <Text style={styles.header}> 
            Placeholder
        </Text>

            <TextInput
                placeholder="E-Mail"
                style={styles.inputBox}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text} />

            <LoginPassword/>

        <TouchableOpacity style={styles.button1} onPress={() => this.props.navigation.navigate('Review')}>
                <Text style={styles.textCreateAccount}>
                    Next
                </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2} onPress={() => this.props.navigation.navigate('SignUpName')}>
                <Text style={styles.alreadyAccount}>
                    You dont have an account?<Text style={{color: '#F2994A'}}>  Sign up.</Text>
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
        flex: 0.09,
        fontWeight: '500',
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
        top: 120,
        textAlign: 'center',
       
    },
    button1: {
        width: 288,
        height:50,
        borderRadius: 8,
        borderWidth: 0.5,
        backgroundColor: '#F2994A',
        borderColor: '#F2994A',
        left: 43,
        top: 140,
    },

    textCreateAccount: {
        fontFamily: 'Avenir Next',
        fontSize: 17,
        fontWeight: '600',
        textAlign: 'center',
        color: 'white',
        top: 13,
    },

    button2: {
        width: 375,
        height: 44,
        top: 200,
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