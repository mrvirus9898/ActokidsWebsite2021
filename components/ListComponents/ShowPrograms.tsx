/*
Actokids Project
Nick Bennett

Show Programs is the actual component that contains the flat list, and the card

TODO:
*/

import React, { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native'

import {
  TouchableHighlight,
  View,
  FlatList
} from 'react-native';

import ProgramCards from './ProgramCards';

import FilterCriteria from '../../types';

export default function ShowPrograms(params: Array<Array<any>>){

  //const [filter, setFilter] = useState<Array<any>>([]);
  const [filter, setFilter] = useState<Array<String>>([]);

  const isFocused = useIsFocused()

    useEffect(() => {
      console.log("Current Filter: " + FilterCriteria.Criteria)
    } , [isFocused])


  function drawCards(){
        //console.log("Filter: " + filter)
        if(params === undefined)
        {
          console.log("Still Loading")
          return(null)
        }else{
          //console.log("Showing Programs: " + Object.keys(params.navigation))
          
          let filteredData = applyFilter(FilterCriteria.Criteria)
          return( 
            <View>
              <FlatList
                data={filteredData}
                keyExtractor={(x, i) => i.toString()}
                renderItem={({ item }) => (
                  <View >
                    <TouchableHighlight 
                      accessible = {true}
                      accessibilityLabel = {item.Program_Name}
                      accessibilityHint="Click here to learn more."
                      accessibilityRole="imagebutton" 
                      onPress= {() => {
                        params.navigation.navigate('ProgramDetailsScreen', {item: item});
                      }}>
                      <ProgramCards item={item} />
                    </TouchableHighlight>
                  </View>
                )}
              />
            </View>
          )
      }
  }

  function applyFilter(filter: Array<String>){
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
    /*var arr = [1, 2, 3, 4];
    arr.forEach(function (el) {
      console.log(el);
    })*/
    //console.log(output)
    return(output)
  }

  return (drawCards())

}

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