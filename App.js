import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import WelcomeScreen from './screens/WelcomeScreen';
import AboutScreen from './screens/AboutScreen';
import ImageGrid from './screens/ImageGrid';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';

// const Stack = createStackNavigator();

/*
  The react native NavigatorContainer is not loading my screens
  so I had to build them separately. I used android studio with VS code.
  Uncomment each screen to view the wproject.
*/
const App= () => {
  return (
    <SafeAreaView style={styles.container}>
          {/* <NavigationContainer>
                 <Stack.Navigator initialRouteName="WelcomeScreen">
                  <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
                  <Stack.Screen name="AboutScreen" component={AboutScreen} />
                  <Stack.Screen name="ImageGrid" component={ImageGrid} />
                </Stack.Navigator> 
          </NavigationContainer> */}

          {/* <WelcomeScreen/> */}
          <AboutScreen/>
          {/* <ImageGrid/> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#E5E5E5',
  },
});

export default App;
