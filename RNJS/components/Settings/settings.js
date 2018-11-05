import React, {Component} from 'react';
import { StyleSheet, Text, Image, View , ScrollView, TouchableOpacity , Alert, TextInput} from 'react-native';



import { createStackNavigator } from 'react-navigation';


export default class Settings extends React.Component {
    static navigationOptions = {
        header: null
    }

    
    
render() {
      
    return (

        <View style={styles.overall}>

        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image style={styles.back} source={require("/Users/christopherroskes/Desktop/NativeCode/RNJS/assets/back-arrow.png")}/> 
        </TouchableOpacity>

            <View style={styles.containerSettings}>

                <View style={styles.settingsBox}>
                        <Text style={styles.textSettings}>
                            Settings
                        </Text>
                        <Image style={styles.settingsPic} source={require("/Users/christopherroskes/Desktop/NativeCode/RNJS/assets/settings-img.png")}/> 
                </View>

            </View>

            <View style={styles.containerProfile}>

                <View style={styles.profileBox}>
                    <Text style={styles.textProfile}>
                        Profile
                    </Text>
                    <Image style={styles.profilePic} source={require("/Users/christopherroskes/Desktop/NativeCode/RNJS/assets/profile-img.png")}/> 
                </View>

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

    back: {
        height: 30,
        width: 30,
        top: 20,
        left: 10,
    },

    containerSettings: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        top: 35,
    },

    containerProfile: {
        flex: 1,
        backgroundColor: 'white',
        top: 25,
    },

    profileBox: {
        backgroundColor: '#313142',
        width: 500,
        height: 50,
        flexDirection: 'row',
    },

    profilePic: {
        height: 40,
        width: 40,
        left: 150,
        top: 4,
    },

    textProfile: {
        fontFamily: 'Avenir Next',
        fontWeight: '600',
        textAlign: 'center',
        top: 15,
        left: 140,
        color: 'white',
    },

    settingsBox: {
        backgroundColor: '#313142',
        width: 500,
        height: 50,
        flexDirection: 'row',
    },

    settingsPic: {
        height: 40,
        width: 40,
        left: 150,
        top: 4,
    },

    textSettings: {
        fontFamily: 'Avenir Next',
        fontWeight: '600',
        textAlign: 'center',
        top: 15,
        left: 140,
        color: 'white',
    },



    

  
});