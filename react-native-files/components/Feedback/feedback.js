import React, {Component} from 'react';
import { StyleSheet, Text, Image, View , ScrollView, TouchableOpacity , Alert, px} from 'react-native';
import Navbarfeedback from './navbar-feedback';

import { createStackNavigator } from 'react-navigation';


export default class Feedback extends React.Component {
    static navigationOptions = {
        header: null
    }
    
    
render() {
      
    return (

        <View style={styles.ocontainer}>

        <Navbarfeedback/>

            <ScrollView style={styles.conatiner}>


            <View >
                <View style={styles.box}>
                        
                        <View>
                            <Text style={styles.situation}>
                                SITUATION
                            </Text>

                            <Text style={styles.situationInput}>
                                During yesterday morning`s team meating, when you gave your presentation...
                            </Text>

                            <Text style={styles.action}>
                                ACTION
                            </Text>

                            <Text style={styles.actionInput}>
                            During yesterday morning`s team meating, when you gave your presentation...
                            </Text>

                            <Text style={styles.impact}>
                                IMPACT
                            </Text>

                            <Text style={styles.impactInput}>
                                During yesterday morning`s team meating, when you gave your presentation...
                            </Text>
                        </View>

                </View>

            
            
       </View>
            </ScrollView>

            <TouchableOpacity style={styles.tuContainer}>
                <Text style={styles.tuText}>
                    thank you
                </Text>
            </TouchableOpacity>
        </View>
    )
  }

}


const styles = StyleSheet.create({

    ocontainer: {
        flex:1,
        backgroundColor: 'white',
        
        
    },

    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
    },

    box: {
        margin: 27,
        borderRadius: 13,
        borderWidth: 0.5,
        backgroundColor: 'white',
        borderColor: 'white',
        shadowColor: '#DADADA',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        flex: 1,
    },

    situation: {
        fontFamily: "Avenir Next",
        fontSize: 12,
        letterSpacing: 1.5,
        left: 24,
        paddingTop: 20,
        paddingBottom: 10,
        

    },

    action: {
        fontFamily: "Avenir Next",
        fontSize: 12,
        letterSpacing: 1.5,
        left: 24,
        paddingTop: 20,
        paddingBottom: 10,

    },

    impact: {
        fontFamily: "Avenir Next",
        fontSize: 12,
        letterSpacing: 0.12,
        letterSpacing: 1.5,
        left: 24,
        paddingTop: 20,
        paddingBottom: 10,

    },




    situationInput: {
        fontFamily: "Avenir Next",
        fontSize: 14,
        width: 200,
        left: 24,
        paddingTop: 5,
        paddingBottom: 10,
        fontWeight: 'bold',
    },

    actionInput: {
        fontFamily: "Avenir Next",
        fontSize: 14,
        width: 200,
        left: 24,
        paddingTop: 5,
        paddingBottom: 10,
        fontWeight: 'bold',
    },

    impactInput: {
        fontFamily: "Avenir Next",
        fontSize: 14,
        width: 200,
        left: 24,
        paddingTop: 5,
        paddingBottom: 20,
        fontWeight: 'bold',
    },

    tuContainer: {
        flex:0.8,
        backgroundColor: 'white',
        borderRadius: 6,
        borderWidth: 0.5,
        width: 320,
        backgroundColor: '#F2994A',
        borderColor: '#F2994A',
        bottom: 28,
        left: 28

    },

    tuText: {
        top: 17,
        textAlign: 'center',
        fontFamily: 'Avenir Next',
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 1.3
    },

});
