import React, {Component} from 'react';
import { StyleSheet, Text, Image, View , ScrollView, TouchableOpacity , Alert, px} from 'react-native';

import { createStackNavigator } from 'react-navigation';



export default class InboxLine2 extends React.Component {
    static navigationOptions = {
        header: null
    }
    
    
render() {
      
    return (

        <View>
            <ScrollView>

            <View style={styles.container}>
                
                <Text style={styles.kindOfMassage}>
                    Feedback/Request
                </Text>

                </View>
            </ScrollView>

    </View>
    )
  }

}


const styles = StyleSheet.create({

    kindOfMassage: {
        fontFamily: "Avenir Next",
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 4,
        marginLeft: 35,
    },

    
    
});