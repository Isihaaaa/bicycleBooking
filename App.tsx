import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './App/Common/Styles/Style'

 import BicycleDetail from './App/components/BicycleDetails/BicycleDetails';
 import BicycleList from './App/components/BicycleList/BicycleList';

 export default function App() { 
 
  const bicycleSelectedHandler = () =>{

  }
  
  return (
    <View style={styles.container}>
        {/* <BicycleDetail /> */}
        <BicycleList onItemSelected={{bicycleSelectedHandler}} onItemPressed={()=>{alert('Hello World')}}/>
    </View>
  );
}


