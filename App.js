import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableHighlight,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.circle}>
        <Text style={styles.text}>Circle</Text>
      </TouchableHighlight>
      {/* <View style={styles.example}>
        <Text>Horizontal Progress Indicator</Text>
      </View>
      <View style={styles.example}>
        <Text>Colored Progress Indicator</Text>
      </View>
      <View style={styles.example}>
        <Text>Fixed Progress Value</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    borderRadius: Math.round(
      Dimensions.get('window').width + Dimensions.get('window').height,
    ),
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').width * 0.5,
    borderWidth: 2,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 20,
    color: 'black',
  },
});

export default App;
