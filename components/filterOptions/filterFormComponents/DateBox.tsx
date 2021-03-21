/*
Actokids Project
Nick Bennett

Date input box

TODO
DATETIMEPICKER FOR WEB VERSION
*/

import * as React from 'react';
import { Text, Button, View, TextInput, Dimensions } from 'react-native';

//import DateTimePicker from '@react-native-community/datetimepicker';

import { Card } from 'react-native-elements';

export default function DateBox() {
  const [date, setDate] = React.useState(new Date())

  let currentDate = (date.getMonth()+1) + " " + date.getDate() + " " + date.getFullYear()

  let screenWidth = Dimensions.get("window").width;
  let cols = 3;
  let tileSize = screenWidth / cols

  function logDate(){
    console.log(currentDate)
  }

  return (        
      <TextInput
        style={{height: 40, borderColor: 'grey', borderWidth: 1, margin: 20, width: tileSize}}
        onChangeText={text => logDate}
        value={currentDate}
      />
    );
}

/*
    <View>
      <View>
        <TouchableHighlight 
          accessible = {true}
          accessibilityLabel = {currentDate}
          accessibilityHint="Click here to learn more."
          accessibilityRole="imagebutton" 
          onPress= {() => {showDatepicker()}}>
          <Card><Text>{currentDate}</Text></Card>
        </TouchableHighlight>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="spinner"
          onChange={onChange}
        />
      )}
    </View>
  
  */
