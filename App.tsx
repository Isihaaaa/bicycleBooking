import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './App/Common/Styles/Style';

import Home from './App/components/Home';
import BicycleList from './App/components/BicycleList';
import BicycleDetails from './App/components/BicycleDetails';

import { createAppContainer, createStackNavigator } from 'react-navigation';

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
const AppStackNavigator = createStackNavigator({
  Home: Home,
  BicycleList: BicycleList,
  BicycleDetails: BicycleDetails,
});

const AppContainer = createAppContainer(AppStackNavigator);
