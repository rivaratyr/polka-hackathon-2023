import React, { useState } from 'react';
import { View, Button, Text, TouchableOpacity, StyleSheet } from 'react-native';
import type { PropsWithChildren } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { WalletConnectModal, useWalletConnectModal } from '@walletconnect/modal-react-native';

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

type SectionProps = PropsWithChildren<{
  navigation: StackNavigationProp<any>;
}>;

function ConnectWalletScreen ({ navigation }: SectionProps): JSX.Element {

  const navigateToVotes = () => {
      navigation.navigate('ActiveVote');
  };
  
  const { open, isConnected, address, provider } = useWalletConnectModal();

  const handleConnect = async () => {
    if (isConnected) {
      return provider?.disconnect();
    }

    return open();
  };

  const handleDisconnect = async () => {
    provider?.disconnect();
  }

  React.useEffect(() => {
    provider?.disconnect();
  }, []);

  return (
    <View style={{ padding: 20, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* isConnecting && <Text style={styles.paragraph}>Connecting...</Text> }
        { isDisconnected && <Text style={styles.paragraph}>Wallet is not connected.</Text> */}
        { address ? (
        <>
            <Text style={styles.paragraph}>Wallet Address: {address}</Text>
            <TouchableOpacity onPress={navigateToVotes}>
                <View style={styles.buttonPink}>
                    <Text style={styles.buttonText}>Participate</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDisconnect}>
              <View style={styles.buttonPink}>
                  <Text style={styles.buttonText}>Disconnect Wallet</Text>
              </View>
          </TouchableOpacity>
        </>
        ) : (
        <>
          {/* <W3mButton/> */}
          <Text style={styles.paragraph}>Using a crypto wallet for anonymous voting harnesses blockchain's inherent security and privacy, upholding the principles of democratic fairness and individual privacy.</Text>
          <TouchableOpacity onPress={handleConnect}>
              <View style={styles.buttonPink}>
                  <Text style={styles.buttonText}>Connect Wallet</Text>
              </View>
          </TouchableOpacity>
          <WalletConnectModal 
              projectId={projectId}
              providerMetadata={metadata} 
          />
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
