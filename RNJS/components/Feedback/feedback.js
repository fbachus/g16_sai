import React, {Component} from 'react';
import { StyleSheet, Text, Image, View , ScrollView, TouchableOpacity , Alert, px} from 'react-native';


import { createStackNavigator } from 'react-navigation';


export default class Feedback extends React.Component {
    static navigationOptions = {
        header: null
    }
    
    
render() {
      
    return (

        <View style={styles.ocontainer}>

        <View style={styles.container}>

            <TouchableOpacity 
            onPress={() => this.props.navigation.goBack()}>
                <Image style={styles.backarrow} source={require("/Users/christopherroskes/Desktop/NativeCode/RNJS/assets/back-arrow.png")}/>
            </TouchableOpacity>

            <Text style={styles.feedbackText}>
                Feedback
            </Text>

            <View >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')} >
                    <Image style={styles.dots} source={require("/Users/christopherroskes/Desktop/NativeCode/RNJS/assets/dots3.png")}/>
                </TouchableOpacity>
            </View>

            <View >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Inbox')} >
                    <Image  style={styles.basket} source={require("/Users/christopherroskes/Desktop/NativeCode/RNJS/assets/inbox-image.png")}/>
                </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Give')}>
                    <Image style={styles.crossButton} source={require("/Users/christopherroskes/Desktop/NativeCode/RNJS/assets/Button-Navbar.png")}/>
                </TouchableOpacity>
            </View>
        </View>

        

            <ScrollView style={styles.conatinerScroll}>


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

            <TouchableOpacity style={styles.tuContainer} 
            onPress={() => this.props.navigation.navigate('Review1')}>
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

    containerScroll: {
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

    container: {
        backgroundColor: 'white',
        flex: 1.3,
        flexDirection: 'row',
    },
    
    feedbackText:{
        fontFamily: "Avenir Next",
        fontSize: 24,
        left: 28,
        top: 50,
    },
    
    dots: {
        height: 32,
        width: 32,
        left: 60,
        top: 50,
    },

    basket: {
        height: 32,
        width: 32,
        left: 85,
        top: 50,
    },

    crossButton: {
        height: 32,
        width: 32,
        left: 110,
        top: 50,
    },

    backarrow: {
        width: 24,
        height: 24,
        top: 50,
        left: 20,
    },


});
