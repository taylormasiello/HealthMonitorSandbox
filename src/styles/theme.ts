import { StyleSheet } from 'react-native';

//future considerations : dark mode

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
//  style={styles.container}

export const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 250,
    marginLeft: 50,
  },
  bigTitleBlack: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 28,
  },
  smallTitleBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 25,
  },
  dangerRed: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
  },
});