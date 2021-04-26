    /*
Actokids Project
Nick Bennett

Program Details displays the details from the program selected from Program List

TODO:
Reorient program details to better match back end.
-the item variable is a section of the json passed in through the program list
-change the keys to match the back end keys

Restyle program details to be more appealing

Add Calendar Intent

Add ios Intents
*/

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  useWindowDimensions,
  TouchableHighlight,
  ScrollView
} from 'react-native';

import Colors from '../constants/Colors'

import { Ionicons, AntDesign } from '@expo/vector-icons';

//Moment is being depricated, may need to investigate alternate forks.
import moment from 'moment';

export default function ProgramDetails(params: Array<any>){
    let imageWidth = (useWindowDimensions().width) * 0.30; 
    let imageHeight = (useWindowDimensions().height) * 0.20; 
    let disabilities_served;

    let item = params.route.params.item

    console.log(item)
    
    //TODO: Need to resolve taxonomy, then update this section
    if (item.disability_types != null) {
        disabilities_served = item.disability_types;
    }

    // Phone # is stored as a String and does not require logic at the moment
    // +1 is not added, android seems to handle this just fine without it
    var phoneStr = item.Cont_Phone;

    // Strip the time out of the date
    //TODO: Need to 
    var eventDate = moment(item.Sched_Text);
    eventDate.add(item.duration, 'hours');
    var formattedEventDate = moment(item.Sched_Text).format("dddd, MMMM Do");
    var startTime = moment(item.Sched_Text).format("h:mm a");
    var endTime = moment(eventDate).format("h:mm a");


    return(
        <View style={styles.container}>
        <ScrollView>
            <View style={styles.row}>
              <View style={styles.textWrap}>
                <Text style={styles.activityInfo}>{item.Program_Name}</Text>

            <TouchableHighlight
              onPress= {() => {
                Linking.openURL(item.Program_Url);
              }}>
              <View style={styles.row2}>
                <View style={styles.imageWrapper}>
                    <AntDesign name="clockcircle" size={28} color="black" />
                  </View>
                <View>
                  <Text style={{fontSize: 16}}>{item.Program_Url}</Text>
                </View>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              onPress= {() => {
                //alert('Pass Map Intent: https://www.google.com/maps/search/?api=1&query=' + item.Program_Address)
                Linking.openURL('https://www.google.com/maps/search/?api=1&query=' + item.Program_Address);
                }}>
              <View style={styles.row3}>
                <View style={styles.imageWrapper}>
                  <AntDesign name="earth" size={28} color="black" />
                  </View>
                <View>
                  <Text style={{fontSize: 16}}>{item.Program_Address}</Text>

                </View>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              onPress= {() => {
                Linking.openURL('tel:' + phoneStr)
                }}>
              <View style={styles.row4}>
                <View style={styles.imageWrapper}>
                  <AntDesign name="phone" size={28} color="black" />
                  </View>
                <View>
                  <Text style={{fontSize: 16, marginTop: 5}}>{phoneStr}</Text>
                </View>
              </View>
            </TouchableHighlight>
              
            <TouchableHighlight
              onPress= {() => {
                Linking.openURL('mailto:'+item.Cont_Email) 
                }}>
              <View style={styles.row5}>
                <View style={styles.imageWrapper}>
                  <AntDesign name="mail" size={28} color="black" />
                  </View>
                <View>
                  <Text style={{fontSize: 16, marginTop: 5}}>{item.Cont_Email}</Text>
                </View>
              </View>
            </TouchableHighlight>

              </View>
              <Image style={{ width: imageWidth, height: imageHeight }} source={{ uri: item.Program_Image_Url}} />
            </View>


            <View style={{ borderColor: 'lightgray', borderBottomWidth: 2, marginTop: 30, marginBottom: 20 }}></View>
            <Text style={styles.subTitles}>DESCRIPTION</Text>
            <Text style={styles.bodyText}>{item.description}</Text>
            <Text style={styles.subTitles}>ACTIVITY TYPE</Text>
            <Text style={styles.bodyText}>{item.Program_Types}</Text>
            <Text style={styles.subTitles}>DISABILITIES SERVED</Text>
            <Text style={styles.bodyText}>{item.accessability}</Text>
            <Text style={styles.subTitles}>AGE RANGE</Text>
            <Text style={styles.bodyText}>{item.min_age} - {item.max_age}</Text>
            <Text style={styles.subTitles}>COST</Text>
            <Text style={styles.bodyText}>${item.Cost}</Text>

            <Text style={styles.subTitles}>PROGRAM CONTACT</Text>
            <Text style={styles.bodyText}>{item.Cont_Name}</Text>
            <Text style={styles.bodyText}>{phoneStr}</Text>
            <Text style={styles.bodyText}>{item.Cont_Email}</Text>
            <View style={{ borderColor: 'lightgray', borderBottomWidth: 2, marginTop: 30, marginBottom: 20 }}></View>
        </ScrollView>
      </View>
    )

}

const styles = StyleSheet.create({
  activityInfo: {
    fontSize: 24,
  },
  row: {
    marginTop: 10,
    flex: 1,
    flexDirection: "row",
  },
  row2: {
    marginTop: 10,
    flex: 2,
    flexDirection: "row",
  },
  row3: {
    marginTop: 10,
    flex: 3,
    flexDirection: "row",
  },
  row4: {
    marginTop: 10,
    flex: 4,
    flexDirection: "row"
  },
  row5: {
    marginTop: 10,
    flex: 5,
    flexDirection: "row"
  },
  textWrap: {
    flex: 1,
  },
  cost2: {
    fontSize: 20,
    left: 140
  },
  subTitles: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 3
  },
  bodyText: {
    fontSize: 16
  },
  container: {
    padding: 10,
    backgroundColor: Colors.OffWhite.color,
  },
  imageWrapper: {
    marginRight: 10
  },
  buttonContainer: {
    backgroundColor: '#F35A3A',
    paddingVertical: 15
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white'
  }

});  

  /*
<View style={styles.textWrap}>
<Text style={styles.cost2}>${item.Cost}</Text>
</View>

<Text style={styles.bodyText}>{item.description}</Text>
  */