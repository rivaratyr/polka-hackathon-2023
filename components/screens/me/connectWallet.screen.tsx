import React, { useState } from 'react';
import { View, Button, Text, TouchableOpacity, StyleSheet } from 'react-native';
/* import WalletConnectProvider from "@walletconnect/react-native-dapp";
import WalletConnect from '@walletconnect/client'; */
import type { PropsWithChildren } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { W3mButton } from '@web3modal/wagmi-react-native';
import { useAccount } from 'wagmi';

type SectionProps = PropsWithChildren<{
  navigation: StackNavigationProp<any>;
}>;

function ConnectWalletScreen ({ navigation }: SectionProps): JSX.Element {

  const navigateToVotes = () => {
      navigation.navigate('ActiveVote');
  };

  const { address, isConnecting, isDisconnected } = useAccount()

  return (
    <View style={{ padding: 20, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        { isConnecting && <Text>Connecting...</Text> }
        { isDisconnected && <Text>Disconnected from wallet.</Text> }
        { address ? (
        <>
            <Text style={styles.paragraph}>Wallet Address: {address}</Text>
            <TouchableOpacity onPress={navigateToVotes}>
                <View style={styles.buttonPink}>
                    <Text style={styles.buttonText}>Participate</Text>
                </View>
            </TouchableOpacity>
        </>
        ) : (
        <>
          <W3mButton/>
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
