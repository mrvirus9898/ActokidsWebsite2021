import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors'

export default function SearchBarComponent(props: any) {
    const [tempString, SetTemp] = React.useState(props.searchTerm)
    const [iconSelection, setIcon] = React.useState(true)
    //console.log("TempString: " + tempString)

    function updateSearchTerm(input: string){
        //console.log("TempString: " + input)
        SetTemp(input)
    }

    function whenUpdated(){   
        //console.log("TempString on update: " + tempString)
        props.setTerm(tempString)
        setIcon(true)
    }

    function clearSearch(){
        SetTemp("")
        props.setTerm("")
        setIcon(true)
    }

    if(iconSelection && (tempString === "")){
        return (
            <View style={styles.iconHeaderStyle}>
                <View>
                    <Text style={styles.headerText}>
                        Actokids
                    </Text>
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.opacityStyle}
                        onPress={() => {
                            setIcon(false);
                        }}>
                    <HeaderIcon 
                        name={"md-search"} 
                        color={Colors.OffWhite.color}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }else if(iconSelection && (tempString != "")){
        return (
            <View style={styles.iconHeaderStyle}>
                <View>
                    <Text style={styles.searchText}>
                        {props.searchTerm}
                    </Text>
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.opacityStyle}
                        onPress={() => {
                            setIcon(false);
                        }}>
                    <HeaderIcon 
                        name={"md-search"} 
                        color={Colors.OffWhite.color}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }else{
        return(
            <View style={styles.searchHeaderStyle}>
                <TextInput
                    style={styles.input}
                    placeholder={"Enter Search Term Here"}
                    onChangeText={updateSearchTerm}
                    onSubmitEditing={whenUpdated}
                    value={tempString} />
                    <TouchableOpacity
                        style={styles.opacityStyle}
                        onPress={() => {
                            clearSearch();
                        }}>
                    <HeaderIcon 
                        name={"md-remove-circle"} 
                        color={Colors.OffWhite.color}/>
                    </TouchableOpacity>
            </View>
        );
    }

}

function HeaderIcon(props: { name: string; color: string }) {
    return (
        <Ionicons 
            size={30} 
            style={{ marginBottom: -3 }} 
            {...props} />);
  }

const styles = StyleSheet.create({
    input: {
        flex: 1,
        width: '80%',
        borderWidth: 0.5,
        color: Colors.OffWhite.color
    },
    headerIconPosition: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: '10%'
    },
    headerText:{
        color: Colors.OffWhite.color,
        justifyContent: 'center',
        fontSize: 28
    },
    searchText:{
        color: Colors.OffWhite.color,
        justifyContent: 'center',
        fontSize: 18
    },
    opacityStyle:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-evenly'
    },
    iconHeaderStyle:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-around'
    },
    searchHeaderStyle:{
        flex:1,
        flexDirection:'row',
        width: '88%'
    }  

});
