import React, {Component} from 'react';
import { StyleSheet, Text, Image, View , ScrollView, TouchableOpacity , Alert, px} from 'react-native';

import { createStackNavigator } from 'react-navigation';



export default class InboxLine1 extends React.Component {
    static navigationOptions = {
        header: null
    }
    
    
render() {
      
    return (

        <View>
            <ScrollView>

            <View style={styles.row}>
                <Image
                style={styles.bluedot}
                source={require("/Users/christopherroskes/Desktop/NativeCode/RNJS/assets/blue-dot.png")}/>
                
                <Text style={styles.name}>
                    Name (Reuest to Backend) 
                </Text>

                <Image
                style={styles.greyarrow}
                source={require("/Users/christopherroskes/Desktop/NativeCode/RNJS/assets/greyarrow-read.png")}/>

                </View>
            </ScrollView>

    </View>
    )
  }

}


const styles = StyleSheet.create({

    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },

    bluedot: {
        height: 17,
        width: 17,
        marginTop: 9,
        marginLeft: 9,
    },

    name: {
        fontFamily: "Avenir Next",
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: 9,
        marginLeft: 9,
    },

    greyarrow: {
        position: 'absolute',
        right:      10,
        height: 20,
        width: 15,
        marginTop: 9,
        //I needed to put the grey arrow with a margin of only 10 (right) next to the name because if the name gets to long the arrow would dissapear - > need to talk to the Interaction designers 

    },
    
});