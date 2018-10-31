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
        this.state = { name: '',
                    situ: '',
                    klasseN: styles.inputBoxToWhom,
                    klasseS: styles.inputBoxWhatSitu,
     };
      }
    
    
render() {
      
    return (

        <View style={styles.container}>

            <Navbarrequest/>
            

            <ScrollView style={styles.scroll}> 
               

                <Text style={styles.towhom}>WHO DO WANT TO RECEIVE FEEDBACK FROM?</Text>

                <TextInput
                placeholder="Try: John Doe"
                style={this.state.klasseN}
                onChangeText={(name) => this.setState({name})}
                onChange={(klasseN) => this.setState({ klasseN: styles.inputBoxToWhomChange})}
                value={this.state.name} 
                />

                <Text style={styles.whatSitu}>WHAT WAS THE SITUATION?</Text>

                <TextInput
                placeholder='Describe the situation...'
                style={this.state.klasseS}
                onChangeText={(situ) => this.setState({situ})}
                onChange={(klasseS) => this.setState({ klasseS: styles.inputBoxWhatSituChange})}
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
        fontFamily: 'Avenir Next',
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
        fontFamily: 'Avenir Next',
        left: 32,
        top: 55,
        padding: 10,
    }, 

    inputBoxToWhomChange: {
        color: '#333333',
        height:44,
        width: 290,
        backgroundColor: '#FAFAFA',
        fontWeight: '600',
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#007AFF',
        fontFamily: 'Avenir Next',
        left: 32,
        top: 20,
        padding: 10,
        shadowColor: '#DADADA',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
    },

    inputBoxWhatSituChange: {
        color: '#333333',
        height:82,
        width: 290,
        fontFamily: 'Avenir Next',
        fontWeight: '600',
        backgroundColor: 'white',
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#007AFF',
        left: 32,
        top: 55,
        padding: 10,
        shadowColor: '#DADADA',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
    },




});