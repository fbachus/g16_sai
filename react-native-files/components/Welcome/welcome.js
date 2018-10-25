import React, {Component} from 'react';
import { StyleSheet, Text, Image, View , ScrollView, TouchableOpacity , Alert, px} from 'react-native';

import { createStackNavigator } from 'react-navigation';


export default class Welcome extends React.Component {
    static navigationOptions = {
        header: null
    }
    
    
render() {
      
    return (

        <View style={styles.container}>
            <View style={styles.headline}>
                <Text style={styles.textWelcometo}>
                    Welcome to 
                </Text>
            </View>

                <Text style={styles.textPalceholder}>
                    Placeholder
                </Text>

            <View>
                <Text style={styles.description}>
                Giving and receiving feedback with everyone around you, the right way.
                </Text>
            </View>

        <View style={styles.description}>
            <View>
                <Image style={styles.w1} source={require("/Users/christopherroskes/Desktop/g16_sai/react-native-files/assets/Welcome1.png")}/>
            </View>

            <View>
                <Image style={styles.w1} source={require("/Users/christopherroskes/Desktop/g16_sai/react-native-files/assets/Welcome2.png")}/>
            </View>

            <View>
                <Image style={styles.w1} source={require("/Users/christopherroskes/Desktop/g16_sai/react-native-files/assets/Welcome3.png")}/>
            </View>
        </View>

            <TouchableOpacity style={styles.continueContainer}>
                <Text style={styles.continue}>
                    continue
                </Text>
            </TouchableOpacity>
            
       
        </View>
    )
  }

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
       
    },

    textWelcometo: {
        fontFamily: 'Avenir Next',
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        top: 36,
    }, 

    textPalceholder: {
        fontFamily: 'Avenir Next',
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        top: 12,
        color: '#F2994A',
    },

    description: {
        fontFamily: 'Avenir Next',
        fontSize: 17,
        width: 287,
        top: 20,
        textAlign: 'center',
        left: 40
    },

    w1: {
        height: 60,
        width: 60,
        left: 43,
        marginTop: 42,
        
    },

    w2: {
        height: 60,
        width: 60,
        left: 43,
    },

    w3: {
        height: 60,
        width: 60,
        left: 43,
       
    },

    continueContainer: {
        backgroundColor: 'white',
        borderRadius: 6,
        borderWidth: 0.5,
        height: 60,
        width: 320,
        backgroundColor: '#F2994A',
        borderColor: '#F2994A',
        marginTop: 60,
        left: 28
    },

    continue: {
        top: 14,
        textAlign: 'center',
        fontFamily: 'Avenir Next',
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 1.3

    },
   

});
