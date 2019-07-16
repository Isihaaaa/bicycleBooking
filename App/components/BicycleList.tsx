import React, { Component } from 'react';
import { FlatList, Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../Common/Styles/Style';

import { BicycleService } from '../BicycleService';
import { BicycleHeader } from '../Bicycle';

export default class BicycleList extends Component {
  public bicycleService: BicycleService;

  constructor(props) {
    super(props);
    this.bicycleService = new BicycleService();

    this.getBicycles();
  }

  state = {
    bicycles: [],
  };

  async getBicycles() {
    const mockedBicycles = await this.bicycleService.getBicyclesAsync();

    this.setState({
      bicycles: mockedBicycles,
    });
  }

  render() {
    return (
      <FlatList
        data={this.state.bicycles}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('BicycleDetails', { itemId: item.id });
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
