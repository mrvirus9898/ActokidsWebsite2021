/*
NICK BENNETT
ACTOKIDS

FIlter by accessibility options for a program
TODO:
Allow users to apply filter options to a program based on accessibility options
*/


import React from 'react';


import { StyleSheet, Text,TouchableOpacity,
    TouchableHighlight, View, Image, FlatList, Dimensions } from 'react-native';
import { Card } from 'react-native-elements';

export default function FilterAccessOptions() {
    let optionsArray = [
        {   title: 'Wheelchair Accessible',
            key: 0
        },
        {   title: 'Autism Friendly',
            key: 1
        },
        {   title: 'Peer Inclusion', 
            key: 2
        },
        {   title: 'Family Bathrooms', 
            key: 3
        },
        {   title: 'Sign Language Interpreter', 
            key: 4
        },
        {   title: 'Supporters Allowed', 
            key: 5
        }
        ];
        let screenWidth = Dimensions.get("window").width;
    let cols = 2;
    let tileSize = screenWidth / cols

    function renderItem({item}){
        return(
            <View style={{height: tileSize, flex: 1/2}}>
                <Card>
                    <Card.Title>{item.title}</Card.Title>
                </Card>
            </View>

        )
    }

    return(
        <FlatList data={optionsArray} renderItem={renderItem} numColumns={2}>

        </FlatList>
    )
}