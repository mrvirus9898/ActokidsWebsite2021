import * as React from 'react';
import { Text, TextInput, View } from 'react-native';

import {Picker} from '@react-native-picker/picker';



export default function PhysicalIntensity() {

  const [selectedOption, setSelection] = React.useState([])

  return (
    <View>
    <Picker
      selectedValue={selectedOption}
      onValueChange={(itemValue, itemIndex) =>
        setSelection(itemValue)
      }>
      <Picker.Item label="Light" value="Light" />
      <Picker.Item label="Moderate" value="Moderate" />
      <Picker.Item label="Self-Paced" value="Self-Paced" />
      <Picker.Item label="Chair-Based" value="Chair-Based" />
    </Picker>
    </View>
  );
}

/*
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

    <DropDownPicker
        items={[
            {label: 'Light', value: 'Light', icon: () => <Icon name="flag" size={18} color="#900" />},
            {label: 'Moderate', value: 'Moderate', icon: () => <Icon name="flag" size={18} color="#900" />},
            {label: 'Self-Paced', value: 'Self-Paced', icon: () => <Icon name="flag" size={18} color="#900" />},
            {label: 'Chair-Based', value: 'Chair-Based', icon: () => <Icon name="flag" size={18} color="#900" />},
        ]}
        defaultValue={'Light'}
        containerStyle={{height: 40}}
        style={{backgroundColor: '#fafafa'}}
        itemStyle={{
            justifyContent: 'flex-start'
        }}
        dropDownStyle={{backgroundColor: '#fafafa'}}
        onChangeItem={item => setSelection(item.value)}
    />

*/