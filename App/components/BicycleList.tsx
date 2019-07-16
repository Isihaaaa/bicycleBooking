import React, { Component } from 'react';
import { FlatList, Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../Common/Styles/Style';

import { BicycleHeader } from '../Bicycle';
import { BicycleService } from '../BicycleService';
import BicycleDetails from './BicycleDetails';

export default class BicycleList extends Component {
  public bicycleService: BicycleService;

  constructor(props) {
    super(props);
    this.bicycleService = new BicycleService();

    this.getBicycles();
  }

  state = {
    data: [],
  };

  async getBicycles() {
    const bicycle = await this.bicycleService.getBicyclesAsync();

    this.setState({
      data: bicycle,
    });
  }

  render() {
    return (
      <FlatList
        data={this.state.data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('BicycleDetails');
            }}
          >
            <View style={styles.bicycleListItem}>
              <Image style={styles.bicycleImage} source={{ uri: item.image }} />
              <Text style={styles.bicycleName}>Bicycle Name: {item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    );
  }
}
