import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, Image, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Welcome from './components/Welcome/welcome.js';
import Inbox from './components/Inbox/inbox.js';
import Review from  './components/Review/review.js';
import Feedback from './components/Feedback/feedback.js';
import SignLogInMenu from './components/LogSign-In/menu-signlog-in';
import SignUpEmail from './components/LogSign-In/signin-email';
import SignUpPassword from './components/LogSign-In/signin-password';
import SignUpName from './components/LogSign-In/signin-name';
import Login from './components/LogSign-In/login';
import Give from './components/Give/give';
import Request from './components/Request/request';
import Settings from './components/Settings/settings'


const RootStack = createStackNavigator(
  {

    Welcome: Welcome,
    Review: Review,
    Inbox: Inbox,
    Feedback: Feedback,
    SignLogInMenu: SignLogInMenu,
    SignUpEmail: SignUpEmail,
    SignUpPassword: SignUpPassword,
    SignUpName: SignUpName,
    Login: Login,
    Give: Give,
    Request: Request, 
    Settings: Settings,   
    Button: SignUpPassword,
  },

  {
    initialRouteName: 'Request',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}


/*AppRegistry.registerComponent('App', () => App)*/


