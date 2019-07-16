import React, { Component } from 'react';
import { Button, View, Image, Text, Modal, FlatList } from 'react-native';
import { styles } from '../Common/Styles/Style';
import { BicycleService } from '../BicycleService';

export default class BicycleDetail extends Component {
  public bicycleService: BicycleService;

  constructor(props) {
    super(props);
    this.bicycleService = new BicycleService();

    // this.getBicycle(1);
  }

  state = {
    data: [],
  };

  async getBicycle(id) {
    try {
      const bicycle = await this.bicycleService.getBicycleAsync(id);

      this.setState({
        data: bicycle,
      });
    } catch (err) {
      console.error(err);
    }
  }

  // componentDidMount() {
  //   this.getBicycle(1);
  //   console.log('getBicycle(1) utan: ' + this.state.data);
  // }

  public render() {
    return (
      <FlatList
        data={this.state.data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <View>
              <Image source={{ uri: item.image }} />
            </View>

            <View>
              <Text>Bicycle Name: {item.name}</Text>
              <Text>Bicycle Type: {item.type}</Text>
              <Text>Bicycle Year: {item.year}</Text>
              <Text>Bicycle Color: {item.color}</Text>
              <Text>Bicycle Description: {item.description}</Text>
              <Button
                title="Foglalás"
                onPress={() => alert('Lefoglalva')}
                // onPress={(item.reser) => {
                //   this.bicycleService.makeReservationForbicycleAsync();
                // }}
              />
            </View>
          </View>
        )}
      />
    );
  }
}
