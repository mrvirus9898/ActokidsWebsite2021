import * as React from 'react';
import ProgramList from '../screens/ProgramList';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import AppLogin from '../components/AppLogin';
import FontSettings from '../components/LeftBarSettings/FontSettings';

import { slide as Menu } from '../node_modules/react-burger-menu';

import { StyleSheet, Dimensions, Text, View, Button, Alert } from 'react-native';

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
  let screenWidth = Dimensions.get("window").width;
    return(
      <View style={styles.body}>
        <Button title="Hello" onPress={ () => alert("Hello")} />
        <View style={{backgroundColor: "Black"}}>
          <Menu>
            <Text>Hello</Text>
            <Text>Hello</Text>
            <Text>Hello</Text>
          </Menu>
        </View>
        <ProgramList navigation={navigator}/>
      </View>
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

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    width: '80%',
    height: '100%'
  },
  wrapcontainer:{

  }

});  