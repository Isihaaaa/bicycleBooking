import React from 'react';
import {  FlatList, Text, View, Image } from 'react-native';
import { styles } from '../../Common/Styles/Style';

interface IBicycleListProps{
}

export default class BicycleList extends React.Component<IBicycleListProps>{
    render(){
        return(
        <View style={styles.bicycleListItem}>
            <Image style={styles.bicycleImage} source={{uri: 'http://www.eshop-gyorsan.hu/fotky22772/fotos/_vyr_9827661563_1835543589803435_363253093_n.jpg'}}></Image>
            <Text style={styles.bicycleName}>Bicycle Name: Csepel Royal 4</Text>
        </View>        
    )}

}



