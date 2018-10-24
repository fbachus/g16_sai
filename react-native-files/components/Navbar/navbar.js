import React, {Component} from 'react';
import { StyleSheet, Text, Image, View , TouchableOpacity , Alert, px} from 'react-native';
import { createStackNavigator } from 'react-navigation';


export default class Navbar extends React.Component {
    static navigationOptions = {
        header: null
    }



  render() {
      
    return (
        <View style={styles.overall}>
            <View >
                <TouchableOpacity style={styles.t_dots}
                onPress={() => this.props.navigation.push('Review')}>
                    <Image style={styles.dots} source={require("/Users/christopherroskes/Desktop/dieErsteFunktionierendeApp/assets/dots3.png")}/>
                </TouchableOpacity>
            </View>
        
            <View >
                <TouchableOpacity style={styles.t_basket}
                onPress={() => this.props.navigation.push('Review')}>
                    <Image style={styles.basket} source={require("/Users/christopherroskes/Desktop/dieErsteFunktionierendeApp/assets/inbox-image.png")}/>
                </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity style={styles.t_crossButton}
                onPress={() => this.props.navigation.push('Review')}>
                    <Image style={styles.crossButton} source={require("/Users/christopherroskes/Desktop/dieErsteFunktionierendeApp/assets/Button-Navbar.png")}/>
                </TouchableOpacity>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({

    overall: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row',
    },
    
    
    dots: {
        height: 32,
        width: 32,
        left: 200,
        top: 10,
    },

    basket: {
        height: 32,
        width: 32,
        left: 230,
        top: 10,
    },

    crossButton: {
        height: 32,
        width: 32,
        left: 260,
        top: 10,
    }
    
});


