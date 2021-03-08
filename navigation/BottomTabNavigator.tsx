import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ProgramList from '../screens/ProgramList';
import ProgramDetails from '../screens/ProgramDetails';
import ActivityList from '../screens/ActivityList';
import Map from '../screens/Map';
import { BottomTabParamList, ProgramParamList, ActivityParamList, MapParamList } from '../types';

import FilterPage from '../screens/FilterPage';
import FilterAccessOptions from '../components/filterOptions/FilterAccessOptions';
import FilterAgesGrades from '../components/filterOptions/FilterAgesGrades';
import FilterCostsAndTravel from '../components/filterOptions/FilterCostsAndTravel';
import FilterIndividualSports from '../components/filterOptions/FilterIndividualSports';
import FilterIndoorPrograms from '../components/filterOptions/FilterIndoorPrograms';
import FilterLanguageOptions from '../components/filterOptions/FilterLanguageOptions';
import FilterOutdoorPrograms from '../components/filterOptions/FilterOutdoorPrograms';
import FilterTeamSports from '../components/filterOptions/FilterTeamSports';

import FilterButton from '../components/FilterButton';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.body}>
      <BottomTab.Navigator
        initialRouteName="Programs"
        tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
        <BottomTab.Screen
          name="Programs"
          component={ProgramListNavigator}
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="md-rocket" color={color} />,
          }}
        />
        <BottomTab.Screen
          name="Activities"
          component={ActivityListNavigator}
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="md-american-football" color={color} />,
          }}
        />
        <BottomTab.Screen
          name="Map"
          component={MapNavigator}
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="md-map" color={color} />,
          }}
        />
      </BottomTab.Navigator>
    </View>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

const ProgramListStack = createStackNavigator<ProgramParamList>();

function ProgramListNavigator() {
  return (
    <ProgramListStack.Navigator>
      <ProgramListStack.Screen
        name="ProgramListScreen"
        component={WrapProgramList}
        options={{ 
          headerTitle: 'Program List', 
          headerRight: () => (<FilterButton />)}}
      />
      <ProgramListStack.Screen
        name="ProgramDetailsScreen"
        component={ProgramDetails}
        options={{ headerTitle: 'Program Details' }}
      />
       <ProgramListStack.Screen
        name="ProgramFilterScreen"
        component={FilterPage}
        options={{ headerTitle: 'Filter' }}
      />   
      <ProgramListStack.Screen
        name="FilterAccessOptions"
        component={FilterAccessOptions}
        options={{ headerTitle: 'Accessibility Options' }}
      />   
      <ProgramListStack.Screen
        name="FilterAgesGrades"
        component={FilterAgesGrades}
        options={{ headerTitle: 'Ages and Grades' }}
      />   
      <ProgramListStack.Screen
        name="FilterCostsAndTravel"
        component={FilterCostsAndTravel}
        options={{ headerTitle: 'Costs and Travel' }}
      />   
      <ProgramListStack.Screen
        name="FilterIndividualSports"
        component={FilterIndividualSports}
        options={{ headerTitle: 'Individual Sports' }}
      />   
      <ProgramListStack.Screen
        name="FilterIndoorPrograms"
        component={FilterIndoorPrograms}
        options={{ headerTitle: 'Indoor Programs' }}
      />   
      <ProgramListStack.Screen
        name="FilterLanguageOptions"
        component={FilterLanguageOptions}
        options={{ headerTitle: 'Language Options' }}
      />   
      <ProgramListStack.Screen
        name="FilterOutdoorPrograms"
        component={FilterOutdoorPrograms}
        options={{ headerTitle: 'Outdoors Programs' }}
      />   
      <ProgramListStack.Screen
        name="FilterTeamSports"
        component={FilterTeamSports}
        options={{ headerTitle: 'Team Sports' }}
      />   
    </ProgramListStack.Navigator>
  );
}

function WrapProgramList({navigation}){
  return(
    <View>
      <ProgramList navigation={navigation}/>
    </View>
  );
}

const ActivityListStack = createStackNavigator<ActivityParamList>();

function ActivityListNavigator() {
  return (
    <ActivityListStack.Navigator>
      <ActivityListStack.Screen
        name="ActivityListScreen"
        component={ActivityList}
        options={{ headerTitle: 'Activity List' }}
      />
    </ActivityListStack.Navigator>
  );
}

const MapStack = createStackNavigator<MapParamList>();

function MapNavigator() {
  return (
    <MapStack.Navigator>
      <MapStack.Screen
        name="MapScreen"
        component={Map}
        options={{ headerTitle: 'Map' }}
      />
    </MapStack.Navigator>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    width: '60%',
    height: '100%'
  },
  wrapcontainer:{

  }

});  