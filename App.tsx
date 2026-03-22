import React from 'react';
import { Text, View } from 'react-native';

import { useHeartBeat } from './src/hooks/heartBeat';
import * as Theme from './src/styles/theme';


export default function App() {

  const { beat } = useHeartBeat();
  
  return (
    <View style={Theme.styles.container}>
      <Text style={Theme.styles.bigBlue}>Hello Alex!</Text>
      <Text style={Theme.styles.red}>My beats so far are: {beat}</Text>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
//  style={styles.container}
