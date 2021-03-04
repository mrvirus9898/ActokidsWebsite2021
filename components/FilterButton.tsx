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
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function filterButton() {
  const navigation = useNavigation();

  return (
    <Button
      title={`Filter`}
      color="#ff4800"
      onPress={() => navigation.navigate('ProgramFilterScreen')}
    />
  );
}