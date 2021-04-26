import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

import FilterCriteria from '../types'

import loadProgramInformation from '../hooks/loadProgramInformation';
import loadTaxonomyInformation from '../hooks/loadTaxonomyInformation';

export default function useCachedResources() {
  const [isProgramLoadingComplete, setProgramLoadingComplete] = React.useState([[]]);
  const [isMapProcessingComplete, setMapProcessingComplete] = React.useState([[]]);
  const [isTaxonomyLoadingComplete, setTaxonomyLoadingComplete] = React.useState([[]]);

  FilterCriteria.Criteria = []

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {

    const incomingPrograms = loadProgramInformation().then(function(result)
    {
        let program = result;
        program.sort((a, b) => (a.Program_Id > b.Program_Id) ? 1 : -1)
        setProgramLoadingComplete(program);
        let tempLocations: any = [];
        let count = 0;
        program.forEach(program => {
          //console.log(element)
          let tempCoord: Coordinates = {
            //turns out you can convert string to number by using the plus sign
            //One Free ¯\_(ツ)_/¯
            latitude: +program.lat,
            longitude: +program.long,
          }
          let tempProLocation: ProgramLocation = {
            title: program.Program_Name,
            key: count,
            coordinates: tempCoord,
            description: program.Program_Types,
            program_id: program.Program_Id
          }
          //searchProgramActivities(program.Program_name)
          tempLocations.push(tempProLocation)
          count++
        })
        setMapProcessingComplete(tempLocations)
    }) 

    const incomingFilter = loadTaxonomyInformation().then(function(result)
    {
        let incomingData: any = []
        let activities = result.Activities;
        let taxonomy = result.Taxonomy;
        incomingData.push(activities)
        incomingData.push(taxonomy)     
        //console.log(incomingData)

        setTaxonomyLoadingComplete(incomingData);
    })


  }, []);

  if(isProgramLoadingComplete && isTaxonomyLoadingComplete && isMapProcessingComplete){
    //console.log(isProgramLoadingComplete)
    //console.log(isTaxonomyLoadingComplete)
    return [isProgramLoadingComplete, isTaxonomyLoadingComplete, isMapProcessingComplete]
  }else{
    
  return false
  }
  
}