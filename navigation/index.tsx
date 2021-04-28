import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, View, StyleSheet, Dimensions } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LeftSideDrawerNavigator from './LeftSideDrawerNavigator'
import LinkingConfiguration from './LinkingConfiguration';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation(props: any) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={props.colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator incomingData={props.incomingData}/>
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator(props: any) {
  //console.log(props.incomingData)
  return (
    <View style={styles.body}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Root" component={returnBottomTabNavigator} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      </Stack.Navigator>
    </View>
  );

  function returnBottomTabNavigator(){
    return (<BottomTabNavigator 
      incomingData = {props.incomingData}/>)
  }

  function returnLeftSideDrawerNavigator(){
    return (<LeftSideDrawerNavigator 
      incomingData = {props.incomingData}/>)
  }
}




const styles = StyleSheet.create({
  body: {
    marginLeft: '10%',
    marginRight: '10%',
    width: '80%',
    height: '100%'
  }
});  