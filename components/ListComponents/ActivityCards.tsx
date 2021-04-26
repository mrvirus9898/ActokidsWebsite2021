import React from 'react';
import { Card } from 'react-native-elements';
import { StyleSheet, Text,TouchableOpacity,
    TouchableHighlight, View, Image } from 'react-native';

export default function ActivityCards(item: any) {
    //console.log(item.item)
    let picture_url: string = (item.item.pic_url === undefined) ? 
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*" : item.item.pic_url;

    function pluralCorrection(program_number: number){
        if(program_number == 1){
            return(
                <Text style={styles.activityCardSubText}>
                    {program_number} program
                </Text>
            )
        }else{
            return(
                <Text style={styles.activityCardSubText}>
                    {program_number} programs
                </Text>
            )
        }
    }

    return(
        <View style={styles.activityCardStyle}>
            <View>
                <Image 
                    style={styles.activityImageStyle}
                    source={{uri: picture_url}}/> 
            </View>
            <View>
                <Text style={styles.activityCardText}>
                        {item.item.activity}
                </Text>
                {pluralCorrection(item.item.programKeys.length)}
            </View>
            <View>
            {//SPLITER VIEW FOR THE MEMES
            }
            </View>
        </View>

    )

}


const styles = StyleSheet.create({
    titleText: {
        fontFamily: 'serif',
        fontSize: 24,
        color: 'black'
    },
    activityCardStyle:{
        marginHorizontal:18,
        marginVertical:10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    activityImageStyle:{
        width: 75,
        height: 75
    },
    activityCardText: {
        fontSize: 26,
        textAlign: 'center',
    },
    activityCardSubText: {
        fontSize: 16,
        textAlign: 'center',
    }
});