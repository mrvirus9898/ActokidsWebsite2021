import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView
} from 'react-native';

import IncomingFilter from '../types'

import CheckBoxList from '../components/CheckBoxList';


import FilterRootCards from '../components/filterOptions/FilterRootCards';

export default function FilterPage() {

    //Need to check as the load function is still loading
    if(IncomingFilter.IncomingFilterActivties.length == 0){
        return(null);        
    }else{
        //console.log(taxonomy.Activities);
        return(
            <View>
                <FilterRootCards />
            </View>
        );
    }

/*
                <ScrollView>
                    <CheckBoxList title={IncomingFilter.IncomingFilterActivties}/>
                    <CheckBoxList title={IncomingFilter.IncomingFilterTaxonomy}/>
                </ScrollView>
                */

    /*if(taxonomy.length == 0){
        
        const incomingData = loadTaxonomyInformation().then(function(result)
        {
            setTaxonomy(result);
        })
        return(null);        
    }else{
        //console.log(taxonomy.Activities);
        return(
            <View>
                <ScrollView>
                    <CheckBoxList title={taxonomy.Activities}/>
                    <CheckBoxList title={taxonomy.Taxonomy}/>
                </ScrollView>
            </View>
        );
    }*/
}

/*
             <Text>Filter List Top Component</Text>
<CheckBoxList title={taxonomy.Activities}/>

<View>
            <ScrollView>
                <Text style={styles.headTitle}>
                    Activity Types
                </Text>
                {ShowActCheckBox()}
                <Text style={styles.textLine}>
                    _________________________________________________________
                </Text>
                <Text style={styles.headTitle}>
                    Disability Types
                </Text>
                {ShowDisCheckBox()}
            </ScrollView>
        </View>

        */
       /*
           const [taxonomy, setTaxonomy] = useState<Array<Array<any>>>([]);

    useEffect(() => {
        const incomingData = loadTaxonomyInformation().then(function(result)
        {
            setTaxonomy(result);
        })
    }, [])*/

