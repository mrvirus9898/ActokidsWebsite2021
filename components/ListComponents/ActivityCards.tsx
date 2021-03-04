import React from 'react';
import { Card } from 'react-native-elements';
import { StyleSheet, Text,TouchableOpacity,
    TouchableHighlight, View, Image } from 'react-native';

export default function ActivityCards(item: any) {
    //console.log(item.item)
    return(
        <Card>
            <Text style={styles.titleText}>
                    {item.item.value}
            </Text>
        </Card>
    )
}

/*
<Text style={{ fontSize: 16, color: 'black', margin: 5 }}>
    {moment(item.item.Sched_Text).format('dddd') + ', ' + moment(item.item.Sched_Text).format('MMMM Do YYYY, h:mm a')}
</Text>

<Text style={{ fontSize: 16, color: 'black' }}>
    {item.item.Program_Name}
</Text>

<Text style={{ fontSize: 16, color: 'black' }}>
    {item.item.Program_Address}
</Text>
*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    toolbar: {
        backgroundColor: '#FF4500',
        paddingTop: 8,
        paddingBottom: 8,
        flexDirection: 'row'
    },
    toolbarTitle: {
        color: '#fff',
        width: 150,
        fontSize: 25,
        textAlign: 'center',
        //flex: 1,
    },
    toolbarFilter: {
        width: 50,
        position: 'absolute',
        bottom: 10,
        right: 50,
    },
    toolbarLocation: {
        width: 50,
        position: 'absolute',
        bottom: 10,
        right: 0,

    },
    button: {
        alignItems: 'center',
        backgroundColor: '#ddd',
        padding: 20
    },
    titleText: {
        fontFamily: 'serif',
        fontSize: 24,
        color: 'black',
    },
    headerText: {
        fontSize: 27,
        fontFamily: 'serif',
        color: 'black',
    },
    itemText: {
        color: 'blue',
        fontFamily: 'serif',
        fontSize: 22,
        textAlign: 'center',
    },
    backButton: {
        flex: 1,
        width: 75,
        fontFamily: 'serif',
        fontSize: 20,
        color: 'white'
    },
    inputText: {
        fontFamily: 'serif',
        fontSize: 22,
        color: 'black',
        textAlign: 'center',
    },
    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
    },

});