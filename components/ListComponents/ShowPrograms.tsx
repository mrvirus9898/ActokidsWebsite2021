/*
Actokids Project
Nick Bennett

Show Programs is the actual component that contains the flat list, and the card

TODO:
*/

import React, { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native'

import {
  TouchableOpacity,
  View,
  FlatList,
  StyleSheet,
  ScrollView
} from 'react-native';

import ProgramCards from './ProgramCards';

import Colors from '../../constants/Colors';

export default function ShowPrograms(props: any){
  //console.log(Object.keys(props.programs))
  //const [filter, setFilter] = useState<Array<any>>([]);

  function drawCards(){
    console.log("Incoming Data " + Object.keys(props))
    let filteredData = applyFilter()
    return( 
      <View style={styles.container}>
      <FlatList
        data={props.programs}
        keyExtractor={(x, i) => i.toString()}
        renderItem={({ item }) => (
          <View style={styles.programListStyle}>
            <TouchableOpacity 
              accessible = {true}
              accessibilityLabel = {item.Program_Name}
              accessibilityHint="Click here to learn more."
              accessibilityRole="imagebutton" 
              onPress= {() => {
                props.navigation.navigate('ProgramDetailsScreen', {item: item});
              }}>
              <ProgramCards item={item} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
    )
  }
//params.navigation.navigate('ProgramDetailsScreen', {item: item});
function applyFilter(){
  let output: Array<any> = []

  //console.log("Current Filter: " + props.searchTerm)
  if((props.searchTerm != "") && (props.searchTerm != undefined)){
    props.programs.forEach(program => {
      if(props.searchTerm === program.Program_Name){
        console.log("Target Found")
        output.push(program)
      }
    });
    //console.log("If True")
    return(output)
  }else{
    //console.log("If False")
    return props.programs
  }
}

  return (drawCards())

}

const styles = StyleSheet.create({
  programListStyle:{
      borderRadius: 6,
      elevation: 3,
      backgroundColor: Colors.OffWhite.color,
      shadowColor: '#333',
      shadowOffset: {width: 1, height: 1},
      shadowOpacity: 0.3,
      shadowRadius: 2,
      marginHorizontal:12,
      marginVertical:4,
  },
  container: {
    padding: 10,
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column'
  },
});


//style={{ marginBotton: 30 }}

/*
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
const FilterDrawer = createDrawerNavigator();

function rightFilterDrawer(){
    return(
      <NavigationContainer independent={true}>
        <FilterDrawer.Navigator 
        initialRouteName="Programs"
        drawerPosition={"right"}>
          <FilterDrawer.Screen name="Programs" component={drawCards} />
        </FilterDrawer.Navigator>
      </NavigationContainer>
    )
  }

*/

/*
    let output: Array<any> = []

    //console.log("Current Filter: " + filter)

    if(filter.length != 0){
      params.programs.forEach(element => {
        if(element.accessability.localeCompare(filter[0]) == 0){
          //console.log(filter[0])
          output.push(element)
        }
        //console.log(output)
      });
    }else{
      output = params.programs
    }
*/

/*
        <ScrollView>
        {
          filteredData.map((data, index) =>
          <View style={styles.programListStyle}>
            <TouchableOpacity 
              key={index}
              accessible = {true}
              accessibilityLabel = {data.Program_Name}
              accessibilityHint="Click here to learn more."
              accessibilityRole="imagebutton" 
              onPress= {() => {
                props.navigation.navigate('ActivityProgramDetailsScreen', {item: data});
              }}>
              <View>
                <ProgramCards item={data} />
              </View>
            </TouchableOpacity>
          </View> )
        }
        </ScrollView>
*/
