/*
Actokids Project
Nick Bennett

Program Criteria drop down

*/

import * as React from 'react';
import { Text, TextInput, View } from 'react-native';


import {Picker} from '@react-native-picker/picker';

export default function TaxonomyCriteria() {

  const [selectedOption, setSelection] = React.useState([])


  return (
    <View>
    <Picker
      selectedValue={selectedOption}
      onValueChange={(itemValue, itemIndex) =>
        setSelection(itemValue)
      }>
      <Picker.Item label="All" value="All" />
      <Picker.Item label="Martial Arts" value="Martial Arts" />
      <Picker.Item label="Track and Field" value="Track and Field" />
      <Picker.Item label="Recreational" value="Recreational" />
    </Picker>
    </View>
  );
}

/*

import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

    <View>
      <DropDownPicker
        items={checkedOptions}
        containerStyle={{height: 40}}
        itemStyle={{
          justifyContent: 'flex-start'
        }}
        dropDownStyle={{backgroundColor: '#fafafa'}}
        onChangeItem={item => chooseSelection(item.value)}
      />
    </View>
    */

    /*
        <DropDownPicker
        items={[
            {label: 'All', value: 'All', icon: () => <Icon name="flag" size={18} color="#900" />},
            {label: 'Martial Arts', value: 'Martial Arts', icon: () => <Icon name="flag" size={18} color="#900" />},
            {label: 'Track and Field', value: 'Track and Field', icon: () => <Icon name="flag" size={18} color="#900" />},
            {label: 'Recreational', value: 'Recreational', icon: () => <Icon name="flag" size={18} color="#900" />},
        ]}
        defaultValue={'All'}


        itemStyle={{
            justifyContent: 'flex-start'
        }}
        dropDownStyle={{backgroundColor: '#fafafa'}}
        onChangeItem={item => setSelection(item.value)}
    />
    */