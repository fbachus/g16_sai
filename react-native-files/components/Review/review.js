import React, {Component} from 'react';
import { StyleSheet, Text, Image, View , ScrollView, TouchableOpacity , Alert, px} from 'react-native';
import Navbar from '../Navbar/navbar';
import Emojies from '../Emojies/emojies'
import { createStackNavigator } from 'react-navigation';


export default class Review extends React.Component {
    static navigationOptions = {
        header: null
    }
render() {
      
    return (

    <ScrollView style={styles.container}>

        <Navbar/>
       <View >
            <Text style={styles.reviewText}>
                Review
            </Text>
        
           <View style={styles.box}>
                
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

            <Emojies/>
            
       </View>

    </ScrollView>
    )
  }

}


const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        flex:1,
    },

    reviewText: {
        fontFamily: "Avenir Next",
        fontSize: 24,
        left: 32,
        top: 10,

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
        shadowOpacity: 1.0
    },




    situation: {
        fontFamily: "Avenir Next",
        fontSize: 12,
        letterSpacing: 1.5,
        left: 52,
        top: 156,

    },

    action: {
        fontFamily: "Avenir Next",
        fontSize: 12,
        left: 52,
        top: 263,
        letterSpacing: 1.5,

    },

    impact: {
        fontFamily: "Avenir Next",
        fontSize: 12,
        letterSpacing: 0.12,
        left: 52,
        top: 370,
        letterSpacing: 1.5,

    },




    situationInput: {
        fontFamily: "Avenir Next",
        fontSize: 14,
        left: 52,
        top: 181,
        width: 272,
    },

    actionInput: {
        fontFamily: "Avenir Next",
        fontSize: 14,
        left: 52,
        top: 288,
        width: 272,
    },

    impactInput: {
        fontFamily: "Avenir Next",
        fontSize: 14,
        left: 52,
        top: 395,
        width: 272,
    },
    
});
