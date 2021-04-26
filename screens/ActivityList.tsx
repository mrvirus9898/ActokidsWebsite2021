import React from 'react';
import {
  View
} from 'react-native';

import ShowActivities from '../components/ListComponents/ShowActivities';

import { ActivityProgramCount } from '../types';

export default function ActivityList(props: any) {
    //console.log(Object.keys(props))
    let currentAPCount: ActivityProgramCount[] = new Array()

    function calculateActivityProgramCount(){
        //console.log(props.programs)
        props.activities.forEach(activity => { 
          let count = 0
          let tempProgramKey: number[] = new Array()
          props.programs.forEach(program => {
            //console.log(program.Program_Types)
            if(activity.value === program.Program_Types){
                count++
                tempProgramKey.push(program.Program_Id)
            }
          });
          let tempAPCount: ActivityProgramCount = {
              activity: activity.value,
              pic_url: activity.pic_url,
              numberOfPrograms: count,
              programKeys: tempProgramKey
          }
          currentAPCount.push(tempAPCount)
        });
      }

      calculateActivityProgramCount()
      //console.log()  
      currentAPCount.sort((a, b) => (a.numberOfPrograms < b.numberOfPrograms) ? 1 : -1)

    return(
        <View style={{flex:1}}>      
            <ShowActivities 
                navigation={props.navigation}
                searchTerm={props.searchTerm}
                activities={currentAPCount}
                programs={props.programs}/>
        </View>
    );
}
//<AppLogin />
//<AppGoogleLogout />