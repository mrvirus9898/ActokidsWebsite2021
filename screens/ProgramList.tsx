import React, { useState, useEffect } from 'react';
import { View} from 'react-native';

import ShowPrograms from '../components/ListComponents/ShowPrograms';

import loadProgramInformation from '../hooks/loadProgramInformation';
import loadTaxonomyInformation from '../hooks/loadTaxonomyInformation';
import useColorScheme from '../hooks/useColorScheme';

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BottomTabParamList, ProgramParamList, ActivityParamList, MapParamList } from '../types';
import IncomingFilter from '../types'

const BottomTab = createBottomTabNavigator<BottomTabParamList>();


export default function ProgramList({navigation}) {
  const colorScheme = useColorScheme();
  return ( ProgramComponents(navigation));
}


function ProgramComponents({ navigation }) {
    const [programs, setPrograms] = useState<Array<Array<any>>>([]);

    useEffect(() => {
      IncomingFilter.IncomingFilterActivties = []
      IncomingFilter.IncomingFilterTaxonomy = []
      const incomingPrograms = loadProgramInformation().then(function(result)
          {
              setPrograms(result);
          })
      const incomingFilter = loadTaxonomyInformation().then(function(result)
      {
          IncomingFilter.IncomingFilterActivties = result.Activities;
          IncomingFilter.IncomingFilterTaxonomy = result.Taxonomy;
      })
      }, [])

    //console.log(navigation);

    //console.log(Object.keys(programs[0]));
    //console.log(programs[0].Program_Name);
    return(
        <View>
            <ShowPrograms programs={programs} navigation={navigation}/>
        </View>
    );
  }


  // You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}
