import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [progress, setProgress] = useState(20);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Progress {progress}%</Text>

      <View style={styles.progressBG}>
        <View
          style={[
            styles.progress,
            {
              width: `${progress}%`,
            },
          ]}
        />
      </View>

      <View style={styles.btnBox}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            if (progress > 20) {
              setProgress(progress - 20);
            }
          }}>
          <Text style={styles.btnText}>Previous</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            if (progress < 100) {
              setProgress(progress + 20);
            }
          }}
          style={styles.btn}>
          <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E0EAE9',
  },

  progressBG: {
    width: '20%',
    height: '10%',
    backgroundColor: '#C4CDD5',
    marginHorizontal: 25,
    borderRadius: 50,
  },

  progress: {
    width: '20%',
    height: '100%',
    backgroundColor: '#00AB55',
    borderRadius: 50,
  },

  label: {
    fontSize: 15,
    fontWeight: '500',
    color: '#005249',
    marginBottom: 20,
  },

  btn: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: '#919EAB',
    borderRadius: 6,
    marginHorizontal: 10,
    marginTop: 40,
  },

  btnText: {
    fontWeight: '500',
    color: '#fff',
  },

  btnBox: {
    flexDirection: 'row',
  },
});
