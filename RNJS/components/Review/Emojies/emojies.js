import React, {Component} from 'react';
import { StyleSheet, Text, Image, View , ScrollView, TouchableOpacity , Alert, px} from 'react-native';
import { createStackNavigator } from 'react-navigation';


export default class Emojies extends React.Component {
    static navigationOptions = {
        header: null
    }


render() {
      
    return (

    <View style={styles.containerEmojies}>

                <TouchableOpacity 
                    onPress={() => {
                     Alert.alert('Thank you! We will check it again.');
                        }}>
                        <Image style={styles.curious} source={require("/Users/christopherroskes/Desktop/NativeCode/RNJS/assets/Curious-Emojie.png")}/>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => {
                        Alert.alert('Thanks for your help!                   The feedback is on its way...');
                           }}>
                        <Image style={styles.tutobene} source={require("/Users/christopherroskes/Desktop/NativeCode/RNJS/assets/TutoBene-Emojie.png")}/>
                </TouchableOpacity>

                 
    </View>
    )
  }

}


const styles = StyleSheet.create({

    containerEmojies: {
        backgroundColor: 'white',
        flex:0.4,
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
