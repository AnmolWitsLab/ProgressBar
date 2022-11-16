// import React, {useState} from 'react';
// import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

// const propStyle = (percent, base_degrees) => {
//   const rotateBy = base_degrees + percent * 3.6;
//   return {
//     transform: [{rotateZ: `${rotateBy}deg`}],
//   };
// };

// const renderThirdLayer = percent => {
//   if (percent > 50) {
//     return (
//       <View style={[styles.secondProgressLayer, propStyle(percent - 50, 45)]} />
//     );
//   } else {
//     return <View style={styles.offsetLayer} />;
//   }
// };

// const App = ({percent}) => {
//   const [progress, setProgress] = useState(20);

//   let firstProgressLayerStyle;
//   if (percent > 50) {
//     firstProgressLayerStyle = propStyle(50, -135);
//   } else {
//     firstProgressLayerStyle = propStyle(percent, -135);
//   }

//   return (
//     <View style={styles.container}>
//       <View style={[styles.firstProgressLayer, firstProgressLayerStyle]} />
//       {renderThirdLayer(percent)}
//       <TouchableOpacity
//         onPress={() => {
//           if (progress > 20) {
//             setProgress(progress - 20);
//           }
//         }}>
//         <Text style={styles.btnText}>Previous</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         onPress={() => {
//           if (progress < 100) {
//             setProgress(progress + 20);
//           }
//         }}
//         style={styles.btn}>
//         <Text style={styles.btnText}>Next</Text>
//       </TouchableOpacity>
//       <Text>{progress}%</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     width: 200,
//     height: 200,
//     borderWidth: 20,
//     borderRadius: 100,
//     borderColor: 'grey',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   firstProgressLayer: {
//     width: 200,
//     height: 200,
//     borderWidth: 20,
//     borderRadius: 100,
//     position: 'absolute',
//     borderLeftColor: 'transparent',
//     borderBottomColor: 'transparent',
//     borderRightColor: 'red',
//     borderTopColor: 'red',
//     transform: [{rotateZ: '-135deg'}],
//   },
//   secondProgressLayer: {
//     width: 200,
//     height: 200,
//     position: 'absolute',
//     borderWidth: 20,
//     borderRadius: 100,
//     borderLeftColor: 'transparent',
//     borderBottomColor: 'transparent',
//     borderRightColor: 'red',
//     borderTopColor: 'red',
//     transform: [{rotateZ: '45deg'}],
//   },
//   offsetLayer: {
//     width: 200,
//     height: 200,
//     position: 'absolute',
//     borderWidth: 20,
//     borderRadius: 100,
//     borderLeftColor: 'transparent',
//     borderBottomColor: 'transparent',
//     borderRightColor: 'grey',
//     borderTopColor: 'grey',
//     transform: [{rotateZ: '135deg'}],
//   },
// });

// export default App;

// bhsgdh

// import React, {useState} from 'react';
// import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

// const propStyle = (percent, base_degrees) => {
//   const rotateBy = base_degrees + percent * 3.6;
//   return {
//     transform: [{rotateZ: `${rotateBy}deg`}],
//   };
// };

// const renderThirdLayer = percent => {
//   if (percent > 50) {
//     return (
//       <View style={[styles.secondProgressLayer, propStyle(percent - 50, 45)]} />
//     );
//   } else {
//     return <View style={styles.offsetLayer} />;
//   }
// };

// const CircularProgress = ({percent}) => {
//   const [progress, setProgress] = useState(20);

//   let firstProgressLayerStyle;
//   if (percent > 50) {
//     firstProgressLayerStyle = propStyle(50, -135);
//   } else {
//     firstProgressLayerStyle = propStyle(percent, -135);
//   }

//   return (
//     <View style={styles.container}>
//       <View style={[styles.firstProgressLayer, firstProgressLayerStyle]}>
//         <Text>{progress}%</Text>
//       </View>
//       {renderThirdLayer(percent)}
//       {console.log(percent)}
//       <TouchableOpacity
//         onPress={() => {
//           if (progress > 20) {
//             setProgress(progress - 20);
//           }
//         }}>
//         <Text style={styles.btnText}>Previous</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         onPress={() => {
//           if (progress < 100) {
//             setProgress(progress + 20);
//           }
//         }}
//         style={styles.btn}>
//         <Text style={styles.btnText}>Next</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     width: 200,
//     height: 200,
//     borderWidth: 20,
//     borderRadius: 100,
//     borderColor: 'grey',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   firstProgressLayer: {
//     width: 200,
//     height: 200,
//     borderWidth: 20,
//     borderRadius: 100,
//     position: 'absolute',
//     borderLeftColor: 'transparent',
//     borderBottomColor: 'transparent',
//     borderRightColor: '#3498db',
//     borderTopColor: '#3498db',
//     transform: [{rotateZ: '-135deg'}],
//   },
//   secondProgressLayer: {
//     width: 200,
//     height: 200,
//     position: 'absolute',
//     borderWidth: 20,
//     borderRadius: 100,
//     borderLeftColor: 'transparent',
//     borderBottomColor: 'transparent',
//     borderRightColor: '#3498db',
//     borderTopColor: '#3498db',
//     transform: [{rotateZ: '45deg'}],
//   },
//   offsetLayer: {
//     width: 200,
//     height: 200,
//     position: 'absolute',
//     borderWidth: 20,
//     borderRadius: 100,
//     borderLeftColor: 'transparent',
//     borderBottomColor: 'transparent',
//     borderRightColor: 'grey',
//     borderTopColor: 'grey',
//     transform: [{rotateZ: '135deg'}],
//   },
// });

// export default CircularProgress;
import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

// const propStyle = (percent, base_degrees) => {
//   const rotateBy = 300;
//   return {
//     transform: [{rotateZ: `${rotateBy}deg`}],
//   };
// };

const CircularProgress = () => {
  // const renderThirdLayer = percent => {
  //   if (percent > 50) {
  //     return (
  //       <View
  //         style={[styles.secondProgressLayer, propStyle(percent - 50, 45)]}
  //       />
  //     );
  //   } else {
  //     return (
  //       <View style={styles.offsetLayer}>
  //         <Text style={styles.btnText}>{progress}%</Text>
  //       </View>
  //     );
  //   }
  // };
  const [progress, setProgress] = useState(0);
  // const [borderRight, setBorderRight] = useState('black');

  const [color, setColor] = useState({borderColor: 'black'});
  // const handle = () => {
  //   switch (color) {
  //     case progress === 25:
  //       setProgress(50);
  //       setColor({borderTopColor: 'red'});
  //       break;
  //     default:
  //       return null;
  //   }
  // };

  // let firstProgressLayerStyle;
  // if (percent > 50) {
  //   firstProgressLayerStyle = propStyle(50, -135);
  // } else {
  //   firstProgressLayerStyle = propStyle(percent, -135);
  // }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.container}>
        <View style={[styles.firstProgressLayer, color]} />
        <Text style={styles.btnText}>{progress}%</Text>
        <TouchableOpacity
          onPress={() => {
            if (progress === 100) {
              setColor({
                borderBottomColor: 'red',
                borderRightColor: 'red',
                borderTopColor: 'red',
              });

              setProgress(75);
            } else if (progress === 75) {
              setProgress(50);
              setColor({
                borderRightColor: 'red',
                borderTopColor: 'red',
              });
            } else if (progress === 50) {
              setProgress(25);
              setColor({
                borderTopColor: 'red',
              });
            } else {
              setProgress(0);
              setColor({borderTopColor: 'black'});
            }
          }}>
          <Text style={styles.btnText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (progress === 0) {
              setColor({borderTopColor: 'red'});
              setProgress(25);
            } else if (progress === 25) {
              setProgress(50);
              setColor({borderRightColor: 'red', borderTopColor: 'red'});
            } else if (progress === 50) {
              setProgress(75);
              setColor({
                borderBottomColor: 'red',
                borderRightColor: 'red',
                borderTopColor: 'red',
              });
            } else {
              setProgress(100);
              setColor({
                borderLeftColor: 'red',
                borderBottomColor: 'red',
                borderRightColor: 'red',
                borderTopColor: 'red',
              });
            }
          }}
          style={styles.btn}>
          <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    borderWidth: 20,
    borderRadius: 100,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnText: {
    color: 'black',
  },

  firstProgressLayer: {
    width: 200,
    height: 200,
    borderWidth: 20,
    borderRadius: 100,
    position: 'absolute',
    transform: [{rotateZ: '45deg'}],
    // borderColor: 'transparent',
    // borderTopColor: '#3498db',
    // borderTopColor: "#3498db",
    // transform: [{ rotateZ: "-135deg" }]
  },
  // secondProgressLayer: {
  //   width: 200,
  //   height: 200,
  //   position: "absolute",
  //   borderWidth: 20,
  //   borderRadius: 100,
  //   borderLeftColor: "transparent",
  //   borderBottomColor: "transparent",
  //   borderRightColor: "#3498db",
  //   borderTopColor: "#3498db",
  //   transform: [{ rotateZ: "45deg" }]
  // },
  // offsetLayer: {
  //   // width: 200,
  //   // height: 200,
  //   position: "absolute",
  //   borderWidth: 20,
  //   borderRadius: 100,
  //   borderLeftColor: "transparent",
  //   borderBottomColor: "transparent",
  //   borderRightColor: "grey",
  //   borderTopColor: "grey",
  //   transform: [{ rotateZ: "135deg" }]
  // }
});

export default CircularProgress;
