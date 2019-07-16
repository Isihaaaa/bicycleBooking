import React, { Component } from 'react';
import { Button, View, Image, Text, Modal, FlatList } from 'react-native';
import { BicycleService } from '../BicycleService';
import { BicycleDetails } from '../Bicycle';
import { NavigationScreenProps } from 'react-navigation';

export default class BicycleDetail extends Component<NavigationScreenProps, { bicycle: BicycleDetails }> {
  public bicycleService: BicycleService;

  state = {
    bicycle: undefined,
  };

  constructor(props, state) {
    super(props, state);

    this.bicycleService = new BicycleService();

    // this.getBicycle(1);
  }

  async getBicycle(id) {
    try {
      const bicycle = await this.bicycleService.getBicycleAsync(id);

      this.setState({
        bicycle: bicycle,
      });
    } catch (err) {
      console.error(err);
    }
  }

  componentDidMount() {
    const itemId = this.props.navigation.getParam('itemId');
    this.getBicycle(itemId);
  }

  public render() {
    // const itemId = navigation.getParams('itemId');

    // console.log(itemId);
    console.log(this.state);
    if (!this.state.bicycle || this.state == null) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }
    return (
      <View>
        <View>
          <Image style={{ width: 400, height: 400 }} source={{ uri: this.state.bicycle.image }} />
        </View>

        <View>
          <Text>Bicycle Name: {this.state.bicycle.name}</Text>
          <Text>Bicycle Type: {this.state.bicycle.type}</Text>
          <Text>Bicycle Year: {this.state.bicycle.year.toDateString()}</Text>
          <Text>Bicycle Color: {this.state.bicycle.color}</Text>
          <Text>Bicycle Description: {this.state.bicycle.description}</Text>
          <Button
            title="Foglalás"
            onPress={() => alert('Lefoglalva')}
            // onPress={({this.state.bicycle.reservation}) => {
            //   this.bicycleService.makeReservationForbicycleAsync();
            // }}
          />
        </View>
      </View>
    );
  }
}
