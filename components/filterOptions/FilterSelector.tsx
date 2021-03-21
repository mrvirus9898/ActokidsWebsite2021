/*
NICK BENNETT
ACTOKIDS

FIlter by Team Sports options for a program
TODO:
Allow Demo users to select between A card filters, and B form filters
*/


import React from 'react';

import { StyleSheet, Text,TouchableOpacity,
    TouchableHighlight, View, Image, Dimensions, FlatList } from 'react-native';

import { Card } from 'react-native-elements';

import { useNavigation } from '@react-navigation/native';

export default function FilterSelector() {
    let optionsArray = [
        {   title: 'Option A',
            key: 0,
            route: 'FilterRootCards'
        },
        {   title: 'Option B',
            key: 1,
            route: 'FilterFormB'
        }
        ];
    let screenWidth = Dimensions.get("window").width;
    let cols = 2;
    let tileSize = screenWidth / cols

    const navigation = useNavigation();

    function renderItem({item}){
        return(
            <View style={{height: tileSize, flex: 1/2}}>
                <TouchableHighlight 
                    accessible = {true}
                    accessibilityLabel = {item.title}
                    accessibilityHint="Click here to learn more."
                    accessibilityRole="imagebutton" 
                    onPress= {() => {
                    navigation.navigate(item.route);
                }}>
                <Card>
                    <Card.Title>{item.title}</Card.Title>
                </Card>
                </TouchableHighlight>
            </View>

        )
    }

    return(
        <FlatList data={optionsArray} renderItem={renderItem} numColumns={2}>

        </FlatList>
    )
}