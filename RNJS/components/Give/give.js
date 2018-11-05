import React, {Component} from 'react';
import { StyleSheet, Text, Image, View , ScrollView, TouchableOpacity , Alert, TextInput} from 'react-native';



import { createStackNavigator } from 'react-navigation';


export default class Give extends React.Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = { name: '',
                situ: '',
                action: '',
                impa: '',
                klasse: styles.inputBoxToWhom,
                klasseS: styles.inputBoxsitu,
                klasseA: styles.inputBoxactio,
                klasseI: styles.inputBoxImpact,
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
                     Give
                </Text> 

                <View style={styles.buttonGive}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Request')}>
                        <Text style={styles.tGive}>Request</Text>
                    </TouchableOpacity>  
                </View>          

            </View>

            

            <ScrollView style={styles.scroll}> 
               

                <Text style={styles.towhom}>TO WHOM</Text>

                <TextInput
                placeholder='Try: John Doe'
                style={this.state.klasse}
                onChangeText={(name) => this.setState({name})}
                onChange={(klasse) => this.setState({klasse: styles.inputBoxToWhomChange})}
                value={this.state.name} 
                />



                <Text style={styles.situ}>SITUATION</Text>

                <TextInput
                placeholder='What was the sitaution?'
                style={this.state.klasseS}
                onChangeText={(situ) => this.setState({situ})}
                onChange={(klasseS) => this.setState({klasseS: styles.inputBoxsituChange})}
                value={this.state.situ} 
                />



                <Text style={styles.acti}>ACTION</Text>

                <TextInput
                placeholder='What was the action?'
                style={this.state.klasseA}
                onChangeText={(action) => this.setState({action})}
                onChange={(klasseA) => this.setState({klasseA: styles.inputBoxactioChange})}
                value={this.state.action} 
                />



                <Text style={styles.impact}>IMPACT</Text>

                <TextInput
                placeholder='What impact had it?'
                style={this.state.klasseI}
                onChangeText={(impa) => this.setState({impa})}
                onChange={(klasseI) => this.setState({klasseI: styles.inputBoxImpactChange})}
                value={this.state.impa} 
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
        left: 165,
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
        letterSpacing: 1.5, 
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
        flex: 1,
    }, 

    situ: {
        fontFamily: 'Avenir Next',
        fontSize: 12,
        letterSpacing: 1.5, 
        left: 32,
        top: 35,
    },

    inputBoxsitu: {
        color: '#C4C5CA',
        height:82,
        width: 290,
        backgroundColor: '#FAFAFA',
        borderRadius: 6,
        borderWidth: 0.5,
        borderColor: '#CACACA',
        left: 32,
        top: 45,
        paddingLeft: 10,
        paddingRight: 10,
        fontFamily: 'Avenir Next',
    },

    acti: {
        fontFamily: 'Avenir Next',
        fontSize: 12,
        letterSpacing: 1.5, 
        left: 32,
        top: 65,
    },

    inputBoxactio: {
        color: '#C4C5CA',
        height:82,
        width: 290,
        backgroundColor: '#FAFAFA',
        borderRadius: 6,
        borderWidth: 0.5,
        borderColor: '#CACACA',
        left: 32,
        top: 75,
        padding: 10,
        fontFamily: 'Avenir Next',
    },

    impact: {
        fontFamily: 'Avenir Next',
        fontSize: 12,
        letterSpacing: 1.5, 
        left: 32,
        top: 95,
    },

    inputBoxImpact: {
        color: '#C4C5CA',
        height:82,
        width: 290,
        backgroundColor: '#FAFAFA',
        borderRadius: 6,
        borderWidth: 0.5,
        borderColor: '#CACACA',
        left: 32,
        top: 105,
        padding: 10,
        paddingRight: 10,
        fontFamily: 'Avenir Next',
    },


    inputBoxToWhomChange: {
        color: '#333333',
        height:44,
        width: 290,
        backgroundColor: 'white',
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#007AFF',
        left: 32,
        top: 20,
        padding: 10,
        fontWeight: '600',
        fontFamily: 'Avenir Next',
        flex: 1,
        shadowColor: '#DADADA',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
    },

    inputBoxactioChange: {
        color: '#333333',
        height:82,
        width: 290,
        backgroundColor: 'white',
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#007AFF',
        fontWeight: '600',
        left: 32,
        top: 75,
        padding: 10,
        fontFamily: 'Avenir Next',
        shadowColor: '#DADADA',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
    },

    inputBoxsituChange: {
        color: '#333333',
        height:82,
        width: 290,
        backgroundColor: 'white',
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#007AFF',
        left: 32,
        top: 45,
        padding: 10,
        fontWeight: '600',
        fontFamily: 'Avenir Next',
        shadowColor: '#DADADA',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
    },
    inputBoxImpactChange: {
        color: '#333333',
        height:82,
        width: 290,
        backgroundColor: 'white',
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#007AFF',
        left: 32,
        top: 105,
        padding: 10,
        fontWeight: '600',
        fontFamily: 'Avenir Next',
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