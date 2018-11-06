import React, {Component} from 'react';
import { StyleSheet, Text, Image, View , ScrollView, TouchableOpacity , Alert, px} from 'react-native';
import InboxAllLines from './inbox-allLines';

import { createStackNavigator } from 'react-navigation';






export default class Inbox extends React.Component {
    static navigationOptions = {
        header: null
    }
    
    
render() {
      
    return (

        <View style={styles.ocontainer}>

        <View style={styles.container}>

                <TouchableOpacity 
                onPress={() => this.props.navigation.goBack()}>
                        <Image style={styles.backarrow} source={require("/Users/christopherroskes/Desktop/g16_sai/react-native/assets/back-arrow.png")}/>
                </TouchableOpacity>

                    <Text style={styles.tInbox}>
                        Inbox
                </Text>
                
                <View >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}>
                        <Image style={styles.dots} source={require("/Users/christopherroskes/Desktop/g16_sai/react-native/assets/dots3.png")}/>
                    </TouchableOpacity>
                </View>
            
                <View >
                    <TouchableOpacity>
                        <Image style={styles.basket} source={require("/Users/christopherroskes/Desktop/g16_sai/react-native/assets/inbox-image.png")}/>
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Give')}>
                        <Image style={styles.crossButton} source={require("/Users/christopherroskes/Desktop/g16_sai/react-native/assets/Button-Navbar.png")}/>
                    </TouchableOpacity>
                </View>

        </View>

           

        <ScrollView style={styles.containerScroll}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Feedback')}>
                <InboxAllLines/>
            </TouchableOpacity>  

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Feedback')}>
                <InboxAllLines/>
            </TouchableOpacity>  

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Feedback')}>
                <InboxAllLines/>
            </TouchableOpacity>  

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Feedback')}>
                <InboxAllLines/>
            </TouchableOpacity>  

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Feedback')}>
                <InboxAllLines/>
            </TouchableOpacity>  

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Feedback')}>
                <InboxAllLines/>
            </TouchableOpacity>  
            
        </ScrollView> 

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
        
    },
    

    container: {
        backgroundColor: 'white',
        flex: 0.2,
        flexDirection: 'row',
        
    },

    backarrow: {
        width: 24,
        height: 24,
        top: 50,
        left: 20,
    },

    tInbox: {
        fontFamily: "Avenir Next",
        fontSize: 24,
        top: 50,
        left: 50,
    },
    
    dots: {
        height: 32,
        width: 32,
        left: 120,
        top: 50,
    },

    basket: {
        height: 32,
        width: 32,
        left: 140,
        top: 50,
    },

    crossButton: {
        height: 32,
        width: 32,
        left: 160,
        top: 48,
    }
    
});

