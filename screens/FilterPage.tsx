import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView
} from 'react-native';

import IncomingFilter from '../types'

import CheckBoxList from '../components/CheckBoxList';


import FilterRootCards from '../components/filterOptions/FilterRootCards';

import FilterSelector from '../components/filterOptions/FilterSelector';

export default function FilterPage() {
    return(
        <View>
            <FilterSelector />
        </View>
    );
}

/*
    if(IncomingFilter.IncomingFilterActivties.length == 0){
        return(null);        
    }else{
        //console.log(taxonomy.Activities);
        return(
            <View>
                <FilterSelector />
            </View>
        );
    }*/

