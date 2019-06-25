import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        // backgroundColor: 'red'
        marginTop: 25
    },
    bicycleListItem:{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 5
        
    },
    bicycleName:{
        paddingLeft: 20
    },

    /*Bicycle Details*/ 
    bicycleDetailsContainer:{
        marginTop: 50
    },
    bicycleDetailsImageContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    bicycleDetailsTextContainer:{
        flex:2,
        margin: 40
    },

    bicycleImage:{
        width: 70,
        height:70   
    },
    bicycleDetailsImage:{
        width: 250,
        height: 250,
        marginBottom: 20   
    },
    bicycleTextsContainer:{
        flex:1,
        alignItems: 'center',
        backgroundColor: 'red'
    }
})