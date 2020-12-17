import React from 'react';
import { Home } from './src/components/Home.js';
import { Login} from './src/components/Login.js';
import { StackNavigator } from 'react-navigation';
import {Register} from './src/components/Register';


const MyRoutes = StackNavigator(
  {
    HomeRoute: {
      screen: Home
    },
    LoginRoute: {
      screen: Login
    },
    RegisterRoute:{
      screen:Register
    },
  },
  {
    initialRoute: 'HomeRoute'
  }
);

export default class App extends React.Component {
  render() {
    return (
      <MyRoutes />
    );
  }
}

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
