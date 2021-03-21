/*
Actokids Project
Nick Bennett

Not sure why, but a refresh flag is eneded to update the form

*/

import React, {useState, useEffect} from 'react';
import {  View, StyleSheet, Text  } from 'react-native';

import  CheckBox  from '@react-native-community/checkbox';

import { Card } from 'react-native-elements';

export default function AgesAndGrades(){

    const [checkedOptions, setOptions] = useState([
        {   title: '5 - 8 Years    ',
            key: 0,
            checked: false
        },
        {   title: '9 - 12 Years',
            key: 1,
            checked: false
        },
        {   title: '13 - 16 Years', 
            key: 2,
            checked: false
        },
        {   title: 'High School', 
            key: 3,
            checked: false
        }
    ]);

    const [refresh, setRefresh] = useState(false);

    return(       
        <View style={styles.container}>
            {
                checkedOptions.map((item, key) => 
                    <Card key={key}>
                        <View key={key} style={styles.checkboxstyle}>
                            <CheckBox
                                key={key}
                                disabled={false}
                                value={item.checked}
                                onValueChange={() => changeCheck(item.key)}
                            />
                            <Text style={styles.checkboxlabel}>{item.title}</Text>
                        </View>
                    </Card>
                )
            }
        </View>  )

    function changeCheck(key: number){
        let tempOptions = checkedOptions
        tempOptions[key].checked = !tempOptions[key].checked
        console.log(tempOptions[key].title + " " + tempOptions[key].checked)
        setOptions(tempOptions)
        //Again, not sure why but this flag check is needed 
        setRefresh(!refresh)

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1/2,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    checkboxstyle: {
        flex: 1,
        flexDirection: 'row'
    },
    checkboxlabel: {
        marginTop: 5
    }
  });