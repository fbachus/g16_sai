import React, {Component} from 'react';
import { StyleSheet, Text, Image, View , ScrollView, TouchableOpacity , Alert, px} from 'react-native';
import { createStackNavigator } from 'react-navigation';


export default class Emojies extends React.Component {
    static navigationOptions = {
        header: null
    }
render() {
      
    return (

    <ScrollView style={styles.container}>
                <TouchableOpacity style={styles.t_dots}
                    onPress={() => this.props.navigation.push('Review')}>
                        <Image style={styles.dots} source={require("/Users/christopherroskes/Desktop/dieErsteFunktionierendeApp/assets/Curious-Emojie.png")}/>
                </TouchableOpacity>

                 <TouchableOpacity style={styles.t_dots}
                    onPress={() => this.props.navigation.push('Review')}>
                        <Image style={styles.dots} source={require("/Users/christopherroskes/Desktop/dieErsteFunktionierendeApp/assets/TutoBene-Emojie.png")}/>
                </TouchableOpacity>
    </ScrollView>
    )
  }

}


const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        flex:1,
    },
    
});
