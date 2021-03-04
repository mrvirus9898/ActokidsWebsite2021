/*
NICK BENNETT
ACTOKIDS

FIlter by Root Cards for the filter options
*/



import React from 'react';

import { StyleSheet, Text,TouchableOpacity,
    TouchableHighlight, View, Image, FlatList, Dimensions } from 'react-native';
import { Card } from 'react-native-elements';

import { useNavigation } from '@react-navigation/native';

export default function FilterRootCards() {
    let optionsArray = [
    {   title: 'Accessibility Options',
        key: 0,
        route: 'FilterAccessOptions'
    },
    {   title: 'Ages and Grades',
        key: 1,
        route: 'FilterAgesGrades'
    },
    {   title: 'Team Sports', 
        key: 2,
        route: 'FilterTeamSports'
    },
    {   title: 'Individual Sports', 
        key: 3,
        route: 'FilterIndividualSports'
    },
    {   title: 'Indoor', 
        key: 4,
        route: 'FilterIndoorPrograms'
    },
    {   title: 'Outdoor', 
        key: 5,
        route: 'FilterOutdoorPrograms'
    },
    {   title: 'Language Options', 
        key: 6,
        route: 'FilterLanguageOptions'
    },
    {   title: 'Cost and Travel', 
        key: 7,
        route: 'FilterCostsAndTravel'
    }
    ];
    let screenWidth = Dimensions.get("window").width;
    let cols = 3;
    let tileSize = screenWidth / cols

    const navigation = useNavigation();

    function renderItem({item}){
       //console.log(navigation)
        return(
            <View style={{height: tileSize, flex: 1/2}}>
                <TouchableHighlight 
                    accessible = {true}
                    accessibilityLabel = {item.Program_Name}
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


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#FF5733',
    },
    paragraph: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20
      },
    filterRootCardStyle:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    colorDemo:{
        width: 50, 
        height: 50, 
        backgroundColor: 'powderblue'
    }

});

/*
            <Card>
                <Text style={styles.paragraph}>Criteria 1</Text>
            </Card>
            <Card>
                <Text style={styles.paragraph}>Criteria 2</Text>
            </Card>
            <Card>
                <Text style={styles.paragraph}>Criteria 3</Text>
            </Card>
            <Card>
                <Text style={styles.paragraph}>Criteria 4</Text>
            </Card>
            <Card>
                <Text style={styles.paragraph}>Criteria 5</Text>
            </Card>
            <Card>
                <Text style={styles.paragraph}>Criteria 6</Text>
            </Card>
            <Card>
                <Text style={styles.paragraph}>Criteria 7</Text>
            </Card>
                  // Try setting `justifyContent` to `center`.
      // Try setting `flexDirection` to `row`.
      <View style={styles.filterRootCardStyle}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
      </View>
      {'Accessibility Options'}, 
        'Ages and Grades', 
        'Team Sports', 
        'Individual Sports', 
        'Indoor', 
        'Outdoor', 
        'Language Options', 
        'Cost and Travel'
*/