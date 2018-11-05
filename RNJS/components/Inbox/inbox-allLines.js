import React, {Component} from 'react';
import { StyleSheet, Text, Image, View , ScrollView, TouchableOpacity , Alert, px} from 'react-native';
import InboxLine1 from './inbox-line1'
import InboxLine2 from './inbox-line2';
import InboxLine3 from './inbox-line3';
import InboxLine4 from './inbox-line4';
import { createStackNavigator } from 'react-navigation';



export default class InboxAllLines extends React.Component {
    static navigationOptions = {
        header: null
    }
    
    
render() {
      
    return (

        <View>
            <ScrollView style={styles.container}>
                <InboxLine1/>
                <InboxLine2/>
                <InboxLine3/>
                <InboxLine4/>
            </ScrollView>
            
    </View>
    )
  }

}


const styles = StyleSheet.create({

   
    
});