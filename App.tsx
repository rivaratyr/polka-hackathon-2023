import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/* import { createDrawerNavigator } from '@react-navigation/drawer'; */
import LoginScreen from './components/screens/login/login.screen';
import DataCalculationScreen from './components/screens/me/data.screen';
import TopicScreen from './components/screens/vote/topic.screen';
import VoteScreen from './components/screens/vote/vote.screen';
import ActiveVoteScreen from './components/screens/vote/activeVote.screen';

const Stack = createNativeStackNavigator();
/* const Drawer = createDrawerNavigator(); */

function App(): JSX.Element {

  return (
    <NavigationContainer>
      {/* <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={LoginScreen} /> */}
      <Stack.Navigator initialRouteName="DataCalculationScreen">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="DataCalculation" component={DataCalculationScreen} />
        <Stack.Screen name="Topic" component={TopicScreen} />
        <Stack.Screen name="Vote" component={VoteScreen} />
        <Stack.Screen name="ActiveVote" component={ActiveVoteScreen} />
      </Stack.Navigator>
     {/*  </Drawer.Navigator> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
