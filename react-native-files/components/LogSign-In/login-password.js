import React, {Component} from 'react';
import { StyleSheet, Text, Image, View , ScrollView, TouchableOpacity , Alert, TextInput} from 'react-native';

import { createStackNavigator } from 'react-navigation';


export default class LoginPassword extends React.Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = { text: 'Password' };
      }
    
    
render() {
      
    return (

        <View style={styles.container}>
            <TextInput
                style={styles.inputBox}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text} />                       
        </View>
    )
  }

}


const styles = StyleSheet.create({

    container: {
        flex: 0.1,
        backgroundColor: 'white',
       
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
        top: 125,
        textAlign: 'center'
    },

});