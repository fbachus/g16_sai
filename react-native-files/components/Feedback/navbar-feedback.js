import React, {Component} from 'react';
import { StyleSheet, Text, Image, View , TouchableOpacity , Alert, Button} from 'react-native';
import { createStackNavigator } from 'react-navigation';


export default class Navbarfeedback extends React.Component {
    static navigationOptions = {
        header: null
    }


  render() {
      
    return (
        <View style={styles.container}>

         <TouchableOpacity 
        onPress={() => this.props.navigation.goBack()}>
                <Image style={styles.backarrow} source={require("/Users/christopherroskes/Desktop/g16_sai/react-native-files/assets/back-arrow.png")}/>
         </TouchableOpacity>

            <Text style={styles.feedbackText}>
                Feedback
            </Text>

            <View >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')} >
                    <Image style={styles.dots} source={require("/Users/christopherroskes/Desktop/g16_sai/react-native-files/assets/dots3.png")}/>
                </TouchableOpacity>
            </View>
        
            <View >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Inbox')} >
                    <Image  style={styles.basket} source={require("/Users/christopherroskes/Desktop/g16_sai/react-native-files/assets/inbox-image.png")}/>
                </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Give')}>
                    <Image style={styles.crossButton} source={require("/Users/christopherroskes/Desktop/g16_sai/react-native-files/assets/Button-Navbar.png")}/>
                </TouchableOpacity>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        flex: 1.3,
        flexDirection: 'row',
    },
    
    feedbackText:{
        fontFamily: "Avenir Next",
        fontSize: 24,
        left: 28,
        top: 25
    },
    
    dots: {
        height: 32,
        width: 32,
        left: 80,
        top: 25,
    },

    basket: {
        height: 32,
        width: 32,
        left: 100,
        top: 25,
    },

    crossButton: {
        height: 32,
        width: 32,
        left: 120,
        top: 25,
    },

    backarrow: {
        width: 24,
        height: 24,
        top: 26,
        left: 20,
    },


    
    
});