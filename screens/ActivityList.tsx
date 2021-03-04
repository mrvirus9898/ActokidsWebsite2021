import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  View,
  FlatList,
  TouchableNativeFeedbackBase
} from 'react-native';

import ShowActivities from '../components/ListComponents/ShowActivities';


export default function ProgramList() {

    return(
        <View>
            <ShowActivities />
        </View>
    );
}
//<AppLogin />
//<AppGoogleLogout />