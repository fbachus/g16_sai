import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, Image, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Welcome from './components/Welcome/welcome.js';
import Inbox from './components/Inbox/inbox.js';
import Review from  './components/Review/review.js';
import Feedback from './components/Feedback/feedback.js';

const RootStack = createStackNavigator(
  {

    Welcome: Welcome,
    Review: Review,
    Inbox: Inbox,
    Feedback: Feedback,
    
  },
  {
    initialRouteName: 'Welcome',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}


/*AppRegistry.registerComponent('App', () => App)*/


