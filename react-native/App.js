import React from 'react';
import { StyleSheet, AppRegistry, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';


import Welcome from './components/Welcome/welcome.js';
import Inbox from './components/Inbox/inbox.js';
import Feedback from './components/Feedback/feedback.js';
import SignLogInMenu from './components/LogSign-In/menu-signlog-in';
import SignUpEmail from './components/LogSign-In/signin-email';
import SignUpPassword from './components/LogSign-In/signin-password';
import SignUpName from './components/LogSign-In/signin-name';
import Login from './components/LogSign-In/login';
import Give from './components/Give/give';
import Request from './components/Request/request';
import Settings from './components/Settings/settings';


import Review1 from './components/Review/review-navbar1';





const RootStack = createStackNavigator(
  {

    Welcome: Welcome,
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
    
    Review1: Review1,
    
    
  },

  {
    initialRouteName: 'Review1',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}


AppRegistry.registerComponent('App', () => App)