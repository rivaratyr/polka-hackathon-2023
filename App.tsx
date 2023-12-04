import 'react-native-gesture-handler'; 
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/elements/header.element';
import LoginScreen from './components/screens/login/login.screen';
import DataCalculationScreen from './components/screens/me/data.screen';
import TopicScreen from './components/screens/vote/createVote.screen';
import CreateVoteScreen from './components/screens/vote/createVote.screen';
import VoteScreen from './components/screens/vote/vote.screen';
import ActiveVoteScreen from './components/screens/vote/activeVote.screen';
import TermsScreen from './components/screens/me/terms.screen';
import ConnectWalletScreen from './components/screens/me/connectWallet.screen';

const Stack = createStackNavigator();

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="DataCalculation" component={DataCalculationScreen} />
        <Stack.Screen name="Topic" component={TopicScreen} />
        <Stack.Screen name="Vote" component={VoteScreen} />
        <Stack.Screen name="CreateVote" component={CreateVoteScreen} />
        <Stack.Screen name="ActiveVote" component={ActiveVoteScreen} />
        <Stack.Screen name="Terms" component={TermsScreen} />
        <Stack.Screen name="ConnectWallet" component={ConnectWalletScreen} />
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
