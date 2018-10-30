import React, {Component} from 'react';
import { StyleSheet, Text, Image, View , ScrollView, TouchableOpacity , Alert, px} from 'react-native';
import { createStackNavigator } from 'react-navigation';



export default class Navbarrequest extends React.Component {
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

         <Text style={styles.tInbox}>
                Request
            </Text>

            <View style={styles.buttonGive}>
                <TouchableOpacity>
                    <Text style={styles.tGive}>Give</Text>
                </TouchableOpacity>
            </View>
            
            
        </View>
    )
  }

}


const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        flex: 0.15,
        flexDirection: 'row',
    },

    backarrow: {
        width: 24,
        height: 24,
        top: 31,
        left: 20,
    },

    tInbox: {
        fontFamily: "Avenir Next",
        fontSize: 24,
        top: 30,
        left: 30
    },

    buttonGive: {
        height:33,
        width: 57,
        backgroundColor: 'white',
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#F2994A',
        left: 170,
        top: 30,
    },

    tGive: {
        fontFamily: 'Avenir Next',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 3,
        color: '#4F4F4F',


    },
    
   
    
    
});