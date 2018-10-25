import React, {Component} from 'react';
import { StyleSheet, Text, Image, View , ScrollView, TouchableOpacity , Alert, px} from 'react-native';

import { createStackNavigator } from 'react-navigation';



export default class InboxLine3 extends React.Component {
    static navigationOptions = {
        header: null
    }
    
    
render() {
      
    return (

        <View>
            <ScrollView>

            <View style={styles.container}>
                
                <Text style={styles.message}>
                During yesterday morning`s team meating, when you gave your presentation...
                </Text>

                </View>
            </ScrollView>

    </View>
    )
  }

}


const styles = StyleSheet.create({

    message: {
        fontFamily: "Avenir Next",
        color: '#8C8C8C',
        fontSize: 15,
        marginTop: 4,
        marginLeft: 35,
        width: 333,
    },

    
    
});