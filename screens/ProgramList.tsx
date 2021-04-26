import React from 'react';
import { View, StyleSheet} from 'react-native';

import ShowPrograms from '../components/ListComponents/ShowPrograms';

export default function ProgramList(props: any) {

  return(
      <View style={styles.ProgramListStyle}>
          <ShowPrograms programs={props.programs} navigation={props.navigation}/>
      </View>
  );
}

const styles = StyleSheet.create({
    ProgramListStyle: {
      width: '70%',
      height: '100%',
      marginLeft: '15%',
      marginRight: '15%'
    }
  });  