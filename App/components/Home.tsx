import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../Common/Styles/Style';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Bicycle Booking</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('BicycleList')}>
          <Text>Tap To Enter</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
