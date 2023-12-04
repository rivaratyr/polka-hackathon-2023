import 'react-native-gesture-handler'; 
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
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/elements/header.element';
import LoginScreen from './components/screens/login/login.screen';
import DataCalculationScreen from './components/screens/me/data.screen';
import TopicScreen from './components/screens/vote/topic.screen';
import VoteScreen from './components/screens/vote/vote.screen';
import ActiveVoteScreen from './components/screens/vote/activeVote.screen';
import TermsScreen from './components/screens/me/terms.screen';

const Stack = createStackNavigator();

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="DataCalculation" component={DataCalculationScreen} />
        <Stack.Screen name="Topic" component={TopicScreen} />
        <Stack.Screen name="Vote" component={VoteScreen} />
        <Stack.Screen name="ActiveVote" component={ActiveVoteScreen} />
        <Stack.Screen name="Terms" component={TermsScreen} />
      </Stack.Navigator> 
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
