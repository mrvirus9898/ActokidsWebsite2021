/*
NICK BENNETT
ACTOKIDS

FIlter by Language Options options for a program
TODO:
Allow users to apply filter options to a program based on Language options
*/


import React from 'react';

import { StyleSheet, Text,TouchableOpacity,
    TouchableHighlight, View, Image, FlatList, Dimensions } from 'react-native';
import { Card } from 'react-native-elements';

export default function FilterLanguageOptions() {
    let optionsArray = [
        {   title: 'Water Sports',
            key: 0
        },
        {   title: 'Competitive',
            key: 1
        },
        {   title: 'Martial Arts', 
            key: 2
        },
        {   title: 'Non-Competitive', 
            key: 3
        },
        {   title: 'Gym', 
            key: 4
        }
        ];
        let screenWidth = Dimensions.get("window").width;
    let cols = 2;
    let tileSize = screenWidth / cols

    function renderItem({item}){
        return(
            <View>
                <Card>
                    <Card.Title>{item.title}</Card.Title>
                </Card>
            </View>

        )
    }

    return(
        <FlatList
                data={optionsArray}
                keyExtractor={(x, i) => i.toString()}
                renderItem={renderItem}/>
    )
}