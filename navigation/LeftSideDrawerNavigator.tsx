import * as React from 'react';
import ProgramList from '../screens/ProgramList';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import AppLogin from '../components/AppLogin';
import FontSettings from '../components/LeftBarSettings/FontSettings';

import BottomTabNavigation from './BottomTabNavigator';

import { StyleSheet, Dimensions, Text, View, Button, Alert } from 'react-native';

import Colors from '../constants/Colors';

import FilterButton from '../components/FilterButton';
import SearchBarComponent from '../components/SearchBar';

const Drawer = createDrawerNavigator();

export default function LeftSideDrawerNavigator(props: any) {
  const [searchTerm, SetSearchTerm] = React.useState("")

  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator 
      initialRouteName="Programs"
      drawerPosition={"left"}
      drawerStyle={{
        backgroundColor: Colors.OffWhite.Transparent
        
      }}>
        <Drawer.Screen 
          name="Programs" 
          component={ProgramComponents}
          options={{
            headerShown: true,
            drawerLabel: "Home Screen",
            headerTitle: props => HeaderSearchBar(),
            headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.OffWhite.color
            },
            headerRight: () => (<FilterButton />),
            headerStyle: {
              backgroundColor: Colors.Red.color
            },
          }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );


  function ProgramComponents() {
    return(
      <BottomTabNavigation 
        searchTerm={searchTerm}
        incomingData={props.incomingData}/>
    );
  }

  function HeaderSearchBar(){
    return(<SearchBarComponent 
            searchTerm={searchTerm} 
            setTerm={SetSearchTerm}/>);
  }
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