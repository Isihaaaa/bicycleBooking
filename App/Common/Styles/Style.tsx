import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // container: {
  //     flex: 1,
  //     alignItems: 'center',
  //     justifyContent: 'flex-start',
  //     // backgroundColor: 'red'
  //     marginTop: 25
  // },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bicycleListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 5,
    backgroundColor: '#eee',
  },
  bicycleName: {
    paddingLeft: 20,
  },

  /*Bicycle Details*/

  bicycleImage: {
    width: 70,
    height: 70,
  },
  bicycleTextsContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'red',
  },
});
