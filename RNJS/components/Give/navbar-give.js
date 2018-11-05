import React, {Component} from 'react';
import { StyleSheet, Text, Image, View , ScrollView, TouchableOpacity , Alert, px} from 'react-native';
import { createStackNavigator } from 'react-navigation';



export default class Navbargive extends React.Component {
    static navigationOptions = {
        header: null
    }
    
    
render() {
      
    return (
        <View style={styles.container}>

        <TouchableOpacity 
        onPress={() => this.props.navigation.goBack()}>
                <Image style={styles.backarrow} source={require("/Users/christopherroskes/Desktop/NativeCode/RNJS/assets/back-arrow.png")}/>
         </TouchableOpacity>

         <Text style={styles.tInbox}>
                Give
            </Text>
            
            <View >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}>
                    <Image style={styles.dots} source={require("/Users/christopherroskes/Desktop/NativeCode/RNJS/assets/dots3.png")}/>
                </TouchableOpacity>
            </View>
        
            <View >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Inbox')}>
                    <Image style={styles.basket} source={require("/Users/christopherroskes/Desktop/NativeCode/RNJS/assets/inbox-image.png")}/>
                </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Give')}>
                    <Image style={styles.crossButton} source={require("/Users/christopherroskes/Desktop/NativeCode/RNJS/assets/Button-Navbar.png")}/>
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
    
    dots: {
        height: 32,
        width: 32,
        left: 120,
        top: 30,
    },

    basket: {
        height: 32,
        width: 32,
        left: 140,
        top: 30,
    },

    crossButton: {
        height: 32,
        width: 32,
        left: 160,
        top: 30,
    }
    
    
});