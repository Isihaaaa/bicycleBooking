import React, { Component } from 'react';
import { FlatList, Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../../Common/Styles/Style';
import { BicycleHeader } from '../../Bicycle';
import { BicycleService } from '../../BicycleService';

// interface IBicycleListProps {
//   // onItemPressed: any;
//   // onItemSelected: any;
//    bicycles: BicycleService;
// }

export default class BicycleList extends Component {
  //   constructor() {
  //     // TODO BicycleService példányosítás new BicycleService();
  //   }

  render() {
    return (
      <TouchableOpacity>
        <View style={styles.bicycleListItem}>
          <Image
            style={styles.bicycleImage}
            source={{ uri: 'http://www.eshop-gyorsan.hu/fotky22772/fotos/_vyr_9827661563_1835543589803435_363253093_n.jpg' }}
          />
          <Text style={styles.bicycleName}>Bicycle Name: Csepel Royal</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
