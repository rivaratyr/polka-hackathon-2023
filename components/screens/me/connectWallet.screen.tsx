import React, { useState } from 'react';
import { View, Button, Text, TouchableOpacity, StyleSheet } from 'react-native';
/* import WalletConnectProvider from "@walletconnect/react-native-dapp";
import WalletConnect from '@walletconnect/client'; */
import type { PropsWithChildren } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

type SectionProps = PropsWithChildren<{
  navigation: StackNavigationProp<any>;
}>;

function ConnectWalletScreen ({ navigation }: SectionProps): JSX.Element {
  const [walletAddress, setWalletAddress] = useState('yes');

  const navigateToVotes = () => {
      navigation.navigate('ActiveVote');
  };

  const connectWithWalletConnect = async () => {
    /* try {
      // Create a new WalletConnect instance
      const connector = new WalletConnect({ bridge: 'https://bridge.walletconnect.org' });

      // Check if already connected
      if (!connector.connected) {
        // Create a new session
        await connector.createSession();
      }

      // Get the wallet address from the session
      const { accounts } = connector.session;
      const walletAddress = accounts[0];

      // Store the wallet address in AsyncStorage
      await AsyncStorage.setItem('walletAddress', walletAddress);

      // Update the state with the wallet address
      setWalletAddress(walletAddress);
    } catch (error) {
      console.error('Error connecting with WalletConnect:', error);
    } */
  };

  return (
    <View style={{ padding: 20, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        { walletAddress ? (
        <>
            <Text style={styles.paragraph}>Wallet Address: {walletAddress}</Text>
            <TouchableOpacity onPress={navigateToVotes}>
                <View style={styles.buttonPink}>
                    <Text style={styles.buttonText}>Participate</Text>
                </View>
            </TouchableOpacity>
        </>
        ) : (
        <>
            <TouchableOpacity onPress={connectWithWalletConnect}>
                <View style={styles.buttonPink}>
                    <Text style={styles.buttonText}>Connect</Text>
                </View>
            </TouchableOpacity>
        </>
        ) }
    </View>
  );
};

const styles = StyleSheet.create({
    paragraph: {
        fontSize: 18,
        width: 300,
        color: '#000',
        textAlign: 'center',
        marginBottom: 10
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#000',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    buttonPink: {
        marginTop: 10,
        marginBottom: 10,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#FF53C8',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    buttonText: {
        textAlign: 'center',
        padding: 15,
        fontSize: 18,
        color: '#000',
    },
});

export default ConnectWalletScreen;
