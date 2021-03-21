/*
Actokids Project
Nick Bennett

Date input box

*/

import * as React from 'react';
import { Text, Button, View, Dimensions, TouchableHighlight } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

import { Card } from 'react-native-elements';

export default function DateBox() {
  const [date, setDate] = React.useState(new Date())
  const [mode, setMode] = React.useState('date');
  const [show, setShow] = React.useState(false);

  let currentDate = (date.getMonth()+1) + " " + date.getDate() + " " + date.getFullYear()

  //console.log(date)

  function logDate(){
    console.log(currentDate)
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
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
  );
}

/*
      <Text>{showDatePicker()}</Text>
      <DateTimePicker
        value={date}
        mode={'date'}
        onChange={onChange}
        display="default"
      />
*/
/*
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    console.log(currentDate)
    //setDate(currentDate)
  }

  const showDatePicker = () => {
    return date.getDate
  }*/

  /*
        <TouchableHighlight 
        accessible = {true}
        accessibilityLabel = {currentDate}
        accessibilityHint="Click here to learn more."
        accessibilityRole="imagebutton" 
        onPress= {() => {
            <DateTimePicker
            value={date}
            mode={'date'}
            onChange={logDate}
            display="default"
          />
        }}>
          <Card>
            <Text>{currentDate}</Text>
          </Card>
      </TouchableHighlight>
  */
