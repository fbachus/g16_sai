import React, {Component} from 'react';
import { StyleSheet, Text, Image, View , ScrollView, TouchableOpacity , Alert, px} from 'react-native';
import Navbarreview from '../Navbar/navbar-review';
import Emojies from '../Review/Emojies/emojies';
import { createStackNavigator } from 'react-navigation';



export default class Review extends React.Component {
    static navigationOptions = {
        header: null
    }
    
    
render() {
      
    return (

        <View style={styles.ocontainer}>

        <Navbarreview/>
    <ScrollView style={styles.container}>

        
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

    <Emojies/>

    </View>
    )
  }

}


const styles = StyleSheet.create({

    ocontainer: {
        flex:10,
    },

    container: {
        flex: 5,
        backgroundColor: 'white',
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
    
});
