import React, {Component} from 'react';
import { StyleSheet, Text, Image, View , TouchableOpacity , Alert, Button} from 'react-native';
import { createStackNavigator } from 'react-navigation';


export default class Navbarreview extends React.Component {
    static navigationOptions = {
        header: null
    }
    constructor(props){
        super(props)
    }

    onPress = () => {
        Alert.alert('Hallo')
        
    }


  render() {
      
    return (
        <View style={styles.container}>
            <Text style={styles.reviewText}>
                Review
            </Text>

            <View >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}>
                    <Image style={styles.dots} source={require("/Users/christopherroskes/Desktop/g16_sai/react-native-files/assets/dots3.png")}/>
                </TouchableOpacity>
            </View>
        
            <View >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Inbox')} >
                    <Image  style={styles.basket} source={require("/Users/christopherroskes/Desktop/g16_sai/react-native-files/assets/inbox-image.png")}/>
                </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Give')}>
                    <Image style={styles.crossButton} source={require("/Users/christopherroskes/Desktop/g16_sai/react-native-files/assets/Button-Navbar.png")}/>
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
    
    reviewText:{
        fontFamily: "Avenir Next",
        fontSize: 24,
        left: 32,
        top: 25
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


