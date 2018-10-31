import React, {Component} from 'react';
import { StyleSheet, Text, Image, View , ScrollView, TouchableOpacity , Alert, TextInput} from 'react-native';
import Navbargive from './navbar-give';


import { createStackNavigator } from 'react-navigation';


export default class Give extends React.Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = { name: 'Try: John Doe',
                situ: 'What was the sitaution?',
                action: 'What was the action?',
                impa: 'What impact had it?',
    };
      }
    
    
render() {
      
    return (

        <View style={styles.container}>

            <Navbargive/>
            

            <ScrollView style={styles.scroll}> 
               

                <Text style={styles.towhom}>TO WHOM</Text>

                <TextInput
                alignItems={ 'stretch'}
                style={styles.inputBoxToWhom}
                onChangeText={(name) => this.setState({name})}
                value={this.state.name} 
                />



                <Text style={styles.situ}>SITUATION</Text>

                <TextInput
                style={styles.inputBoxsitu}
                onChangeText={(situ) => this.setState({situ})}
                value={this.state.situ} 
                />



                <Text style={styles.acti}>ACTION</Text>

                <TextInput
                containerViewStyle={{width: '100%', marginLeft: 0}}
                style={styles.inputBoxactio}
                onChangeText={(action) => this.setState({action})}
                value={this.state.action} 
                />



                <Text style={styles.impact}>IMPACT</Text>

                <TextInput
                style={styles.inputBoxImpact}
                onChangeText={(impa) => this.setState({impa})}
                value={this.state.impa} 
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
        letterSpacing: 1.5, 
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
        flex: 1,
    }, 

    situ: {
        fontFamily: 'Avenir Next',
        fontSize: 12,
        letterSpacing: 1.5, 
        left: 32,
        top: 44,
    },

    inputBoxsitu: {
        color: '#C4C5CA',
        height:82,
        width: 290,
        backgroundColor: '#FAFAFA',
        borderRadius: 6,
        borderWidth: 0.5,
        borderColor: '#CACACA',
        left: 32,
        top: 55,
        paddingLeft: 10,
        paddingRight: 10,
        fontFamily: 'Avenir Next',
    },

    acti: {
        fontFamily: 'Avenir Next',
        fontSize: 12,
        letterSpacing: 1.5, 
        left: 32,
        top: 95,
    },

    inputBoxactio: {
        color: '#C4C5CA',
        height:82,
        width: 290,
        backgroundColor: '#FAFAFA',
        borderRadius: 6,
        borderWidth: 0.5,
        borderColor: '#CACACA',
        left: 32,
        top: 110,
        padding: 10,
        fontFamily: 'Avenir Next',
    },

    impact: {
        fontFamily: 'Avenir Next',
        fontSize: 12,
        letterSpacing: 1.5, 
        left: 32,
        top: 140,
    },

    inputBoxImpact: {
        color: '#C4C5CA',
        height:82,
        width: 290,
        backgroundColor: '#FAFAFA',
        borderRadius: 6,
        borderWidth: 0.5,
        borderColor: '#CACACA',
        left: 32,
        top: 155,
        padding: 10,
        paddingRight: 10,
        fontFamily: 'Avenir Next',
    },




});