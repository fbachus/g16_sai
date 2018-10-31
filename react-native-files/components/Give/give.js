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
        this.state = { name: '',
                situ: '',
                action: '',
                impa: '',
                klasse: styles.inputBoxToWhom,
                klasseS: styles.inputBoxsitu,
                klasseA: styles.inputBoxactio,
                klasseI: styles.inputBoxImpact,
    };
      }
    
    
render() {
      
    return (

        <View style={styles.container}>

            <Navbargive/>
            

            <ScrollView style={styles.scroll}> 
               

                <Text style={styles.towhom}>TO WHOM</Text>

                <TextInput
                placeholder='Try: John Doe'
                style={this.state.klasse}
                onChangeText={(name) => this.setState({name})}
                onChange={(klasse) => this.setState({klasse: styles.inputBoxToWhomChange})}
                value={this.state.name} 
                />



                <Text style={styles.situ}>SITUATION</Text>

                <TextInput
                placeholder='What was the sitaution?'
                style={this.state.klasseS}
                onChangeText={(situ) => this.setState({situ})}
                onChange={(klasseS) => this.setState({klasseS: styles.inputBoxsituChange})}
                value={this.state.situ} 
                />



                <Text style={styles.acti}>ACTION</Text>

                <TextInput
                placeholder='What was the action?'
                style={this.state.klasseA}
                onChangeText={(action) => this.setState({action})}
                onChange={(klasseA) => this.setState({klasseA: styles.inputBoxactioChange})}
                value={this.state.action} 
                />



                <Text style={styles.impact}>IMPACT</Text>

                <TextInput
                placeholder='What impact had it?'
                style={this.state.klasseI}
                onChangeText={(impa) => this.setState({impa})}
                onChange={(klasseI) => this.setState({klasseI: styles.inputBoxImpactChange})}
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


    inputBoxToWhomChange: {
        color: '#333333',
        height:44,
        width: 290,
        backgroundColor: 'white',
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#007AFF',
        left: 32,
        top: 20,
        padding: 10,
        fontWeight: '600',
        fontFamily: 'Avenir Next',
        flex: 1,
        shadowColor: '#DADADA',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
    },

    inputBoxactioChange: {
        color: '#333333',
        height:82,
        width: 290,
        backgroundColor: 'white',
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#007AFF',
        fontWeight: '600',
        left: 32,
        top: 110,
        padding: 10,
        fontFamily: 'Avenir Next',
        shadowColor: '#DADADA',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
    },

    inputBoxsituChange: {
        color: '#333333',
        height:82,
        width: 290,
        backgroundColor: 'white',
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#007AFF',
        left: 32,
        top: 55,
        padding: 10,
        fontWeight: '600',
        fontFamily: 'Avenir Next',
        shadowColor: '#DADADA',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
    },
    inputBoxImpactChange: {
        color: '#333333',
        height:82,
        width: 290,
        backgroundColor: 'white',
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#007AFF',
        left: 32,
        top: 155,
        padding: 10,
        fontWeight: '600',
        fontFamily: 'Avenir Next',
        shadowColor: '#DADADA',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
    },



});