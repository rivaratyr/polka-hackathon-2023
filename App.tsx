import 'react-native-gesture-handler'; 
import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
/* 
import '@walletconnect/react-native-compat';
import { WagmiConfig } from 'wagmi'
import { mainnet, polygon, arbitrum } from 'viem/chains'
import { createWeb3Modal, defaultWagmiConfig, Web3Modal } from '@web3modal/wagmi-react-native'


const projectId = '3a7699b6e7786fc539586a9aaa5b470f'

const metadata = {
  name: 'MeritokDAO',
  description: 'Vote, create votes, and participate in the governance of your country.',
  url: 'https://meritok-dao.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
  redirect: {
    native: 'https://',
    universal: 'meritok-dao.com'
  }
}

const chains = [mainnet, polygon, arbitrum]

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

createWeb3Modal({
  projectId,
  chains,
  wagmiConfig,
  defaultChain: mainnet
}) */
//import * as Font from 'expo-font';

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
/*
Font.loadAsync({
  'unbounded': require('./font/Unbounded-Regular.ttf'),
});
*/

function CustomHeader({ navigation }: any) {
  return (
    <TouchableOpacity
      style={{ flexDirection: 'row', alignItems: 'center' }}
      onPress={() => navigation.goBack()}
    >
    <Image
      source={require('./assets/logo.png')} // Replace with your image source
      style={{ width: 30, height: 30, marginRight: 10 }}
    />
    </TouchableOpacity>
  );
}

function App(): JSX.Element {

  return (
      <NavigationContainer >
        <Stack.Navigator initialRouteName="Login" 
            screenOptions={{ 
              headerStyle: { backgroundColor: '#1c1c1c' },
              headerTintColor: 'white',
              headerTitle: 'MeritoDao',
              headerRight: () => <CustomHeader/> }}>
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
