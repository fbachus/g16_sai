import React, {Component} from 'react';
import { StyleSheet, Text, Image, View , ScrollView, TouchableOpacity , Alert, px} from 'react-native';
import { createStackNavigator } from 'react-navigation';


export default class Emojies extends React.Component {
    static navigationOptions = {
        header: null
    }
render() {
      
    return (

    <View style={styles.container}>

                <TouchableOpacity 
                    onPress={() => this.props.navigation.push('Review')}>
                        <Image style={styles.curious} source={require("/Users/christopherroskes/Desktop/g16_sai/react-native-files/assets/Curious-Emojie.png")}/>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => this.props.navigation.push('Review')}>
                        <Image style={styles.tutobene} source={require("/Users/christopherroskes/Desktop/g16_sai/react-native-files/assets/TutoBene-Emojie.png")}/>
                </TouchableOpacity>

                 
    </View>
    )
  }

}


const styles = StyleSheet.create({

    container: {
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
