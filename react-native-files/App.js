import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, Image, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Inbox from './components/Inbox/inbox.js';
import Review from  './components/Review/review.js';
import Feedback from './components/Feedback/feedback.js';

const RootStack = createStackNavigator(
  {
    Review: Review,
    Inbox: Inbox,
    Feedback: Feedback,
    
  },
  {
    initialRouteName: 'Feedback',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}


/*AppRegistry.registerComponent('App', () => App)*/


