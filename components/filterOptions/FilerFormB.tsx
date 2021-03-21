/*
NICK BENNETT
ACTOKIDS

FIlter by Ages and grades for a program
TODO:
Allow users to apply filter options to a program based on Ages and Grades options
*/


import React, { useEffect } from 'react';

import { StyleSheet, Text, SafeAreaView , View, ScrollView } from 'react-native';

import { Card } from 'react-native-elements';

import DistanceBox from './filterFormComponents/DistanceBox'    
import ZipCodeBox from './filterFormComponents/ZipCodeBox'  
import DateBox from './filterFormComponents/DateBox'  
import AccessOptionsCheckBox from './filterFormComponents/AccessOptionsCheckBox'
import AgesAndGrades from './filterFormComponents/AgesAndGrades'
import Costs from './filterFormComponents/Costs'
import TaxonomyCriteria from './filterFormComponents/TaxonomyCriteria'
import PhysicalIntensity from './filterFormComponents/PhysicalIntensity'


export default function FilterFormB() {
    //console.log(item.item)

    return(
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <Card>
                <View>
                    <Text style={styles.text}>Sort By</Text>
                </View>
                <View style={styles.row}>
                    <DistanceBox />
                    <ZipCodeBox />
                </View>
                <View style={styles.row}>
                    <DateBox />
                    <DateBox />
                </View>
            </Card>
            <Card>
                <View>
                    <Text style={styles.text}>Taxonomy Criteria</Text>
                </View>
                <TaxonomyCriteria />
            </Card>
            <Card>
                <View>
                    <Text style={styles.text}>Physical Intensity Level</Text>
                </View>
                <PhysicalIntensity />
            </Card>
            <Card>
                <View>
                    <Text style={styles.text}>Accessibility Options</Text>
                </View>
                <AccessOptionsCheckBox />
            </Card>
            <Card>
                <View>
                    <Text style={styles.text}>Ages/Grades</Text>
                </View>
                <AgesAndGrades />
            </Card>
            <Card>
                <View>
                    <Text style={styles.text}>Cost</Text>
                </View>
                <Costs />
            </Card>
        </ScrollView>
    </SafeAreaView>
    )
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    row: {
        flex: 1,
        flexDirection: "row"
    },
    scrollView: {
      backgroundColor: 'white',
    },
    text: {
      fontSize: 24,
      textAlign: 'center'
    },
  });
  /*
    const { register, handleSubmit, setValue, errors } = useForm();
    const onSubmit = data => console.log(data);

    useEffect(() => {
        register('firstName');
        register('lastName');
    }, [register])

  */