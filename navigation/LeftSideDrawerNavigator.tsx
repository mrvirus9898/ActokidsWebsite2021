import * as React from 'react';
import ProgramList from '../screens/ProgramList';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import AppLogin from '../components/AppLogin';
import FontSettings from '../components/LeftBarSettings/FontSettings';

const Drawer = createDrawerNavigator();

export default function LeftSideDrawerNavigator() {

  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator 
      initialRouteName="Programs"
      drawerPosition={"left"}>
        <Drawer.Screen name="Programs" component={ProgramComponents} />
        <Drawer.Screen name="Sign In" component={LoginSignupComponents} />
        <Drawer.Screen name="Font Size" component={FontComponents} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function ProgramComponents() {
    return(
        <ProgramList />
    );
}

function LoginSignupComponents() {
  return (
    <AppLogin />
  );
}

function FontComponents(){
    return(
        <FontSettings />
    )
}
