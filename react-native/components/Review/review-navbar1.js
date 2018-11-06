import React, {Component} from 'react';
import { StyleSheet, Text, Image, View , ScrollView, TouchableOpacity , Alert, TextInput} from 'react-native';

import { createStackNavigator } from 'react-navigation';


export default class Review1 extends React.Component {
    static navigationOptions = {
        header: null
    }
    
    
render() {
      
    return (

    <View style={styles.overall}>

   
        <View style={styles.containerNavbar}>

                <Text style={styles.reviewText}> 
                     Review
                </Text>    

                <TouchableOpacity style={styles.frame1} onPress={() => this.props.navigation.navigate('Settings')}>
                    <Image style={styles.punkte}  source={require("/Users/christopherroskes/Desktop/g16_sai/react-native/assets/dots3.png")}/>    
                </TouchableOpacity>   

                <TouchableOpacity style={styles.frame2} onPress={() => this.props.navigation.navigate('Inbox')}>
                    <Image style={styles.inbox} source={require("/Users/christopherroskes/Desktop/g16_sai/react-native/assets/inbox-image.png")}/>    
                </TouchableOpacity> 

                <TouchableOpacity style={styles.frame3} onPress={() => this.props.navigation.navigate('Give')} >
                    <Image style={styles.cross} source={require("/Users/christopherroskes/Desktop/g16_sai/react-native/assets/Button-Navbar.png")}/>    
                </TouchableOpacity>              
        </View>

         <ScrollView style={styles.containerBix}>

        
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

         <View style={styles.containerEmojies}>

                <TouchableOpacity 
                    onPress={() => {
                    Alert.alert('Thank you! We will check it again.');
                        }}>
                        <Image style={styles.curious} source={require("/Users/christopherroskes/Desktop/g16_sai/react-native/assets/Curious-Emojie.png")}/>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => {
                        Alert.alert('Thanks for your help!                   The feedback is on its way...');
                        }}>
                        <Image style={styles.tutobene} source={require("/Users/christopherroskes/Desktop/g16_sai/react-native/assets/TutoBene-Emojie.png")}/>
                </TouchableOpacity>

                
        </View>

     </View>
    )
  }

}


const styles = StyleSheet.create({

    overall: {
        flex: 1,
        backgroundColor: 'white',
    },

    containerNavbar: {
        flex: 0.6,
        backgroundColor: 'white',
        flexDirection: 'row',
        marginBottom: 80,
      
       
    },

    reviewText: {
        fontFamily: "Avenir Next",
        fontSize: 24,
        left: 32,
        top: 50,
    },

    punkte: {
        height: 30,
        width: 30,
        left: 120,
        top: 50,
    },

    inbox: {
        height: 30,
        width: 30,
        left: 150,
        top: 50,
    },

    cross: {
        height: 30,
        width: 30,
        left: 180,
        top: 50,
    },

    frame1: {
        height: 50,
        width: 35,
    },

    frame2: {
        height: 50,
        width: 35,
    },

    frame3: {
        height: 50,
        width: 35,
    },

    containerBox: {
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

    containerEmojies: {
        backgroundColor: 'white',
        flex: 3,
    },

    curious: {
        height: 80,
        width: 80,
        left: 104,
    },

    tutobene: {
        height: 80,
        width: 80,
        left: 208,
        bottom: 78,
        
    }
    

});