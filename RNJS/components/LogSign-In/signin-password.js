import React, {Component} from 'react';
import { StyleSheet, Text, Image, View , ScrollView, TouchableOpacity , Alert, TextInput} from 'react-native';

import { createStackNavigator } from 'react-navigation';


export default class SignInPassword extends React.Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = { 
            text: '', 
            klasse: styles.inputBox,
        };
      }

        GetValueFunction = (ValueHolder) =>{
            
            var Value = ValueHolder.length.toString() ;
        
            this.setState({ text : Value}) ;
            
            }

            
    
    
render() {
      
    return (

        <View style={styles.container}>

        <Text style={styles.header}> 
            Your password
        </Text>

            <TextInput
                style={this.state.klasse}
                placeholder="Password"
                onChangeText={(text) => this.setState({text})}
                onChange={(klasse) => this.setState({ klasse: styles.inputBoxChange})}
                value={this.state.text} />

        <TouchableOpacity style={styles.button1} onPress={() => this.props.navigation.navigate('Review1')}>
                <Text style={styles.textCreateAccount}>
                    Next
                </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2} onPress={() => this.props.navigation.navigate('Login')}>
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

    button2: {
        width: 375,
        height: 44,
        top: 285,
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

    inputBoxChange: {
        color: '#333333',
        height:44,
        width: 288,
        backgroundColor: 'white',
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#007AFF',
        left: 43,
        top: 84,
        textAlign: 'center',
        shadowColor: '#DADADA',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
    }

});
