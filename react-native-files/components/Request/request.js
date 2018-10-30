import React, {Component} from 'react';
import { StyleSheet, Text, Image, View , ScrollView, TouchableOpacity , Alert, TextInput} from 'react-native';
import Navbarrequest from './request-navbar';


import { createStackNavigator } from 'react-navigation';


export default class Give extends React.Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = { name: 'Try: John Doe',
        situ: 'Describe the situation...'
     };
      }
    
    
render() {
      
    return (

        <View style={styles.container}>

            <Navbarrequest/>
            

            <ScrollView style={styles.scroll}> 
               

                <Text style={styles.towhom}>WHO DO WANT TO RECEIVE FEEDBACK FROM?</Text>

                <TextInput
                style={styles.inputBoxToWhom}
                onChangeText={(name) => this.setState({name})}
                value={this.state.name} 
                />

                <Text style={styles.whatSitu}>WHAT WAS THE SITUATION?</Text>

                <TextInput
                style={styles.inputBoxWhatSitu}
                onChangeText={(situ) => this.setState({situ})}
                value={this.state.situ} 
                />

              
            </ScrollView>



        </View>
    )
  }

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
       
    },

    scroll: {
        flex: 1,
        backgroundColor: 'white',
    },

    

    towhom: {
        fontFamily: 'Avenir Next',
        fontSize: 12,
        letterSpacing: 1.2, 
        left: 32,
        top: 10,
    }, 

    inputBoxToWhom: {
        color: '#C4C5CA',
        height:44,
        width: 290,
        backgroundColor: '#FAFAFA',
        borderRadius: 6,
        borderWidth: 0.5,
        borderColor: '#CACACA',
        left: 32,
        top: 20,
        padding: 10,
    }, 

    whatSitu: {
        fontFamily: 'Avenir Next',
        fontSize: 12,
        letterSpacing: 1.2, 
        left: 32,
        top: 45,
    },

    inputBoxWhatSitu: {
        color: '#C4C5CA',
        height:82,
        width: 290,
        backgroundColor: '#FAFAFA',
        borderRadius: 6,
        borderWidth: 0.5,
        borderColor: '#CACACA',
        left: 32,
        top: 55,
        padding: 10,
    }, 




});