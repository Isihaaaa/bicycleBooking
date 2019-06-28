import React, { Component } from "react";
import { Button, View, Image, Text,Modal } from "react-native";
import { styles } from '../../Common/Styles/Style'

// interface IBicycleDetailProps {
    
// }
// interface IBicycleDetailState{
//     selectedItem: boolean
// }
 
export default class BicycleDetail extends Component{

    public render (){
        return(
            <Modal>
                {/* <View style={styles.bicycleDetailsContainer}>
                    <View style={styles.bicycleDetailsImageContainer}> */}
                    <View>
                        <View>
                        <Image style={styles.bicycleDetailsImage} source={{uri: 'http://www.eshop-gyorsan.hu/fotky22772/fotos/_vyr_9827661563_1835543589803435_363253093_n.jpg'}}></Image>
                    </View>
                    <View style={styles.bicycleDetailsTextContainer}>
                        <Text>Bicycle Name: Csepel</Text>
                        <Text>Bicycle Type: Fixi</Text>
                        <Text>Bicycle Year: 2016</Text>
                        <Text>Bicycle Color: Blue</Text>
                        <Text>Bicycle Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, nesciunt illum unde similique doloribus quam sapiente enim ratione a itaque. </Text>
                        
                        <Button title="Foglalás" onPress={() =>{alert('Lefoglalva')}} />
                        <Button title="Bezár" onPress={() =>{alert('Bezár')}} />
                    </View>
                </View>
            </Modal>
    )};

}
