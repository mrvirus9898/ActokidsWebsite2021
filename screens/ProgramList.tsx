import React, { useState, useEffect } from 'react';
import { View, StyleSheet} from 'react-native';

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

  const [programs, setPrograms] = useState<Array<Array<any>>>([]);
  //console.log("Program Listr " + navigation);
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
  return(
      <View style={styles.ProgramListStyle}>
          <ShowPrograms programs={programs} navigation={navigation}/>
      </View>
  );
}

const styles = StyleSheet.create({
    ProgramListStyle: {
      width: '70%',
      height: '100%',
      marginLeft: '15%',
      marginRight: '15%'
    }
  });  