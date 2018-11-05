import React, {Component} from 'react';
import { StyleSheet, Text, Image, View , ScrollView, TouchableOpacity , Alert, TextInput} from 'react-native';
import Navbarrequest from './request-navbar';


import { createStackNavigator } from 'react-navigation';


export default class Give extends React.Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = { name: '',
                    situ: '',
                    klasseN: styles.inputBoxToWhom,
                    klasseS: styles.inputBoxWhatSitu,
     };
      }
    
    
render() {
      
    return (

        <View style={styles.container}>

            <View style={styles.containerNavbar}>

                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Image style={styles.arrow}  source={require("/Users/christopherroskes/Desktop/NativeCode/RNJS/assets/back-arrow.png")}/>
                </TouchableOpacity>

                <Text style={styles.reviewText}> 
                    Request
                </Text> 

                <View style={styles.buttonGive}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Give')}>
                        <Text style={styles.tGive}>Give</Text>
                    </TouchableOpacity>  
                </View>          

            </View>


            <ScrollView style={styles.scroll}> 
               

                <Text style={styles.towhom}>WHO DO WANT TO RECEIVE FEEDBACK FROM?</Text>

                <TextInput
                placeholder="Try: John Doe"
                style={this.state.klasseN}
                onChangeText={(name) => this.setState({name})}
                onChange={(klasseN) => this.setState({ klasseN: styles.inputBoxToWhomChange})}
                value={this.state.name} 
                />

                <Text style={styles.whatSitu}>WHAT WAS THE SITUATION?</Text>

                <TextInput
                placeholder='Describe the situation...'
                style={this.state.klasseS}
                onChangeText={(situ) => this.setState({situ})}
                onChange={(klasseS) => this.setState({ klasseS: styles.inputBoxWhatSituChange})}
                value={this.state.situ} 
                />

              
            </ScrollView>

            <View style={styles.containerbutton2}> 
                <TouchableOpacity style={styles.button2} 
                        onPress={() => this.props.navigation.navigate('Review1')}>
                    <Text style={styles.send}>
                        send
                    </Text>
                </TouchableOpacity>
            </View>


        </View>
    )
  }

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
       
    },

    containerNavbar: {
        flex: 0.2,
        backgroundColor: 'white',
        flexDirection: 'row',
    },

    arrow: {
        height: 30,
        width: 30,
        left: 25,
        top: 50,
    },

    reviewText: {
        fontFamily: "Avenir Next",
        fontSize: 24,
        left: 50,
        top: 50,
    },



    buttonGive: {
        height:33,
        width: 80,
        backgroundColor: 'white',
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#F2994A',
        left: 125,
        top: 50,
    },

    tGive: {
        fontFamily: 'Avenir Next',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 3,
        color: '#4F4F4F',


    },


    scroll: {
        flex: 1,
        backgroundColor: 'white',
    },

    

    towhom: {
        fontFamily: 'Avenir Next',
        fontSize: 12,
        letterSpacing: 1.2, 
        left: 32,
        top: 10,
    }, 

    inputBoxToWhom: {
        color: '#C4C5CA',
        height:44,
        width: 290,
        backgroundColor: '#FAFAFA',
        borderRadius: 6,
        borderWidth: 0.5,
        borderColor: '#CACACA',
        left: 32,
        top: 20,
        padding: 10,
        fontFamily: 'Avenir Next',
    }, 

    whatSitu: {
        fontFamily: 'Avenir Next',
        fontSize: 12,
        letterSpacing: 1.2, 
        left: 32,
        top: 45,
    },

    inputBoxWhatSitu: {
        color: '#C4C5CA',
        height:82,
        width: 290,
        backgroundColor: '#FAFAFA',
        borderRadius: 6,
        borderWidth: 0.5,
        borderColor: '#CACACA',
        fontFamily: 'Avenir Next',
        left: 32,
        top: 55,
        padding: 10,
    }, 

    inputBoxToWhomChange: {
        color: '#333333',
        height:44,
        width: 290,
        backgroundColor: '#FAFAFA',
        fontWeight: '600',
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#007AFF',
        fontFamily: 'Avenir Next',
        left: 32,
        top: 20,
        padding: 10,
        shadowColor: '#DADADA',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
    },

    inputBoxWhatSituChange: {
        color: '#333333',
        height:82,
        width: 290,
        fontFamily: 'Avenir Next',
        fontWeight: '600',
        backgroundColor: 'white',
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#007AFF',
        left: 32,
        top: 55,
        padding: 10,
        shadowColor: '#DADADA',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
    },

    containerbutton2: {
        flex: 0.2,
        backgroundColor: 'white',
    },

    send: {
        fontFamily: 'Avenir Next',
        fontSize: 17,
        fontWeight: '600',
        textAlign: 'center',
        color: 'white',
        top: 10,
    },

    button2: {
        width: 290,
        height: 44,
        top: 10,
        left: 29,
        borderWidth: 0.5,
        borderRadius: 5,
        backgroundColor: '#F2994A',
        borderColor: '#F2994A',
    },




});