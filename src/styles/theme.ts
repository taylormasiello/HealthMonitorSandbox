import { StyleSheet } from 'react-native';

//future considerations : dark mode

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#d5d9be', //light yellow 
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  bigTitleBlue: {
    color: '#1535a8',
    fontWeight: 'bold',
    fontSize: 30,
    gap: 20,
  },
  medTitlePurple: {
    color: '#710e71',
    fontWeight: 'bold',
    fontSize: 25,
  },
  smallTitleOrange: {
    color: '#7b5a19',
    fontWeight: 'bold',
    fontSize: 28,
  },
  normalGreen: {
    color: '#2c7113',
    fontWeight: 'bold',
    fontSize: 100,
  },
  dangerRed: {
    color: '#f51212',
    fontWeight: 'bold',
    fontSize: 100,
  },
});

//style={[styles.baseText, isDanger && styles.redText, isAthlete && styles.athleteOverride]}