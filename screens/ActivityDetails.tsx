import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  useWindowDimensions,
  TouchableOpacity
} from 'react-native';

import Colors from '../constants/Colors'

import ProgramCards from '../components/ListComponents/ProgramCards';


export default function ActivityDetails(props: any) {
  //console.log(props.route.params.item.programKeys)
  let pic_url = props.route.params.item.pic_url
  let activity_name = props.route.params.item.activity
  const programs = props.route.params.programs

  let programKeys = props.route.params.item.programKeys

  let imageWidth = (useWindowDimensions().width) * 0.25; 
  let imageHeight = (useWindowDimensions().width) * 0.25; 

  function returnPrograms(){
    let tempProgramList: any[] = new Array()
    programKeys.forEach(key => {
      tempProgramList.push(props.route.params.programs[key])
    });
    return(tempProgramList)
  }

  //console.log(returnPrograms())

    return(
        <View style={styles.container}>
          <ScrollView>
            <View style={styles.row}>
              <View style={styles.imageWrapper}>
              <Image 
                style={{width: imageWidth, height: imageHeight}}
                source={{uri: pic_url}}/> 
              </View>
            </View>
            <View style={styles.titleWrapper}>
                <Text style={styles.activityCardText}>
                  Programs that feature {activity_name}
                </Text>
              </View>
            <View style={styles.contentSeperator}></View>
            <View>
            {
              returnPrograms().map((data, index) => 
              <TouchableOpacity 
                key={index}
                accessible = {true}
                accessibilityLabel = {data.Program_Name}
                accessibilityHint="Click here to learn more."
                accessibilityRole="imagebutton" 
                onPress= {() => {
                  props.navigation.navigate('ActivityProgramDetailsScreen', {item: data});
                }}>
                <View>
                  <ProgramCards item={data} />
                </View>
              </TouchableOpacity>
              )
            }
            
            </View>
            <View style={styles.contentSeperator}></View>
            <View>
              <Text>
                MAYBE FOOT WORK?
              </Text>
            </View>
          </ScrollView>      
        </View>
    );
}

const styles = StyleSheet.create({
  activityInfo: {
    fontSize: 24
  },
  row: {
    marginVertical:10,
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-evenly'
  },
  textWrap: {
    flex: 1
  },
  container: {
    padding: 10,
    backgroundColor: Colors.OffWhite.color,
    flex: 1,
    flexDirection: 'column'
  },
  imageWrapper: {
    marginHorizontal: 50,
    justifyContent: 'center'
  },
  titleWrapper: {
    marginHorizontal: 50,
    justifyContent: 'center'
  },
  activityImageStyle:{
    width: 275,
    height: 150
  },
  activityCardText: {
    fontSize: 26,
    textAlign: 'center',
},
  contentSeperator:{
    borderColor: 'lightgray', 
    borderBottomWidth: 2, 
    marginTop: 30, 
    marginBottom: 20
  }
});  
