import React, {Component} from 'react';
import { StyleSheet, Text, Image, View , ScrollView, TouchableOpacity , Alert, TextInput} from 'react-native';



import { createStackNavigator } from 'react-navigation';


export default class Settings extends React.Component {
    static navigationOptions = {
        header: null
    }

    
    
render() {
      
    return (

        <View style={styles.container}>
            <View style={styles.box}>
                <TouchableOpacity>
                    <View style={styles.profile}>
                        <Image style={styles.imgProfile} source={require("/Users/christopherroskes/Desktop/g16_sai/react-native-files/assets/profile-img.png")}/> 
                        <Text style={styles.textProfile}>
                            Profile
                        </Text>
                    </View> </TouchableOpacity>
                    
                    <TouchableOpacity>
                    <View style={styles.settings}>
                        <Image style={styles.imgSettings} source={require("/Users/christopherroskes/Desktop/g16_sai/react-native-files/assets/settings-img.png")}/> 
                        <Text style={styles.textSettings}>
                            Settings
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
  }

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
       
    },

    box: {
        height:98,
        width: 118,
        backgroundColor: '#313142',
        borderRadius: 11,
        borderWidth: 0.5,
        borderColor: '#313142',
        left: 156,
        top: 75,
    },

    

    imgProfile: {
        height: 25, 
        width: 25,
        top: 15,
        left: 15,
    },

    textProfile: {
        fontFamily: 'Avenir Next',
        fontSize: 12,
        fontWeight: '600',
        color: '#D1D1D1',
        left: 50,
        bottom:4,
    },

    imgSettings: {
        height: 25, 
        width: 25,
        top: 15,
        left: 15,
    },

    textSettings:{
        fontFamily: 'Avenir Next',
        fontSize: 12,
        fontWeight: '600',
        color: '#D1D1D1',
        left: 50,
        bottom:4,
    },

  
});