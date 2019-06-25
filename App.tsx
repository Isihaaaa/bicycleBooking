import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './App/Common/Styles/Style'

 import BicycleDetail from './App/components/BicycleDetails/BicycleDetails';
 import BicycleList from './App/components/BicycleList/BicycleList';

 export default function App() { 
 
  return (
    <View style={styles.container}>
      {/* <BicycleDetail /> */}
      <BicycleList />
      <BicycleList />
    </View>
  );
}


