/*
Actokids Project
Nick Bennett

checkBoxList is used in the filter function to dynamically generate the filter parameters

When the state updates the component is kind of a mystery. But this does work, so have a free shrug ¯\_(ツ)_/¯

WARNING, FILTERCRITERIA EXISTS FOR ACTIVITIES AND TAXONOMY, BUT MERGE INTO ONE DURING SCREEN CHANGES

TODO: Fix checkedIcon / uncheckedIcon not working

*/

import React, {useState, useEffect} from 'react';
import {
  View
} from 'react-native';

import { CheckBox } from 'react-native-elements';
import FilterCriteria from '../types'

export default function checkBoxList({title}){

    const [filterCriteria, setFilter] = useState([]);
    //Checked only true purpose is to force a state update on the checkbox component after the filter has been modified.
    //It does not actually track what has or has not been checked. That is done by logic.
    const [checked, setChecked] = useState(false);

    //This useEffect will ensure that the filter is only loaded from saved data when the component is loaded, not on ever update
    useEffect(() => {
        if(FilterCriteria.Criteria !== undefined){
            //console.log(FilterCriteria.Criteria)
            setFilter(FilterCriteria.Criteria)
            //filterCriteria.push()
        }
    }, [])
    

    return(
        <View>
            {
                title.map((item, key) => <CheckBox
                    title={item.value}
                    key={key}
                    checked={filterCriteria.includes(item.value)}
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o' 
                    onPress={() => changeCheck(item)}/>)
            }
        </View>        
    )

    function changeCheck(item){
        changeFilter(item.value)
        setChecked(!checked)
        //console.log(FilterCriteria.Criteria)
    }

    function changeFilter(item){
        //console.log(filterCriteria.indexOf(item))
        //console.log(filterCriteria.includes(item))
        if(!filterCriteria.includes(item)){
            filterCriteria.push(item)
        }else{
            filterCriteria.splice(filterCriteria.indexOf(item), 1)
        }
        FilterCriteria.Criteria = filterCriteria
    }
}
