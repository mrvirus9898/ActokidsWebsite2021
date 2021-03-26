/*
Actokids Project
Nick Bennett

In a quark of React 5, buttons that navigate need to be injected into 
default headers used in that navigation stack. The code its very pedestrian
but if you try to add this to app JS instead of having a component React will 
throw a temper tantrum.

Future react releases will probably fix this but until them, have a free shrug ¯\_(ツ)_/¯

*/

import * as React from 'react';
import { Button, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Colors from '../constants/Colors'

export default function filterButton() {
  const navigation = useNavigation();

  return (
    <Button
      title={`Filter`}
      color={Colors.Red.color}
      onPress={() => navigation.navigate('ProgramFilterScreen')}
    />
  );
}
const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: Colors.OffWhite.color,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginRight: 10
  },
  appButtonText: {
    fontSize: 20,
    color: Colors.Red.color,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

/*
    <TouchableOpacity
      style={styles.appButtonContainer}
      onPress={() => navigation.navigate('ProgramFilterScreen')}
    >
      <Text style={styles.appButtonText}>Filter</Text>
    </TouchableOpacity>

  );
  */