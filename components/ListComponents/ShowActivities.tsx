import React, { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native'

import {
  TouchableHighlight,
  View,
  FlatList
} from 'react-native';

import ActivityCards from './ActivityCards';
import IncomingFilter from '../../types'


export default function ShowActivities(){

    //const [filter, setFilter] = useState<Array<any>>([]);
//    const [filter, setFilter] = useState<Array<String>>([]);

  
    function drawCards(){
          //console.log("Filter: " + filter)
          if(IncomingFilter.IncomingFilterActivties === undefined)
          {
            console.log("Still Loading")
            return(null)
          }else{
            //console.log("Showing Programs: " + Object.keys(params))
            
            let filteredData = IncomingFilter.IncomingFilterActivties
            return( 
              <View>
                <FlatList
                  data={filteredData}
                  keyExtractor={(x, i) => i.toString()}
                  renderItem={({ item }) => (
                    <View >
                      <TouchableHighlight 
                        accessible = {true}
                        accessibilityLabel = {item.value}
                        accessibilityHint="Click here to learn more."
                        accessibilityRole="imagebutton" 
                        onPress= {() => {
                          alert(item.value);
                        }}>
                        <ActivityCards item={item} />
                      </TouchableHighlight>
                    </View>
                  )}
                />
              </View>
            )
        }
    }    
  
    return (drawCards())
  
  }


  /*function applyFilter(filter: Array<String>){
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
      //console.log(output)
      return(output)
    }*/