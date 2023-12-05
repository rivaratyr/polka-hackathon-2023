import React, { useState, useEffect, useRef } from 'react';
import { View, Button, Text, TouchableOpacity, StyleSheet, Animated, Image, Easing } from 'react-native';
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
  const positionX = useRef(new Animated.Value(0)).current;
  const positionY = useRef(new Animated.Value(0)).current;
  const containerWidth = 300; // Az edény szélességét igazítsa a szükséghez
  const containerHeight = 300; // Az edény magasságát igazítsa a szükséghez
  const bounceDistance = 100; // Az ugrás maximális távolsága

  const startBouncingAnimation = () => {
    const randomX = Math.random() * (containerWidth - 50); // Az X kezdőpozíció véletlenszerűen generálva
    const randomY = Math.random() * (containerHeight - 50); // Az Y kezdőpozíció véletlenszerűen generálva

    Animated.loop(
      Animated.sequence([
        // 45 fokos irányba kezdődő mozgás
        Animated.timing(positionX, {
          toValue: randomX + bounceDistance,
          duration: 1000, // Az ugrás időtartamának beállítása
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(positionY, {
          toValue: randomY + bounceDistance,
          duration: 1000, // Az ugrás időtartamának beállítása
          easing: Easing.linear,
          useNativeDriver: false,
        }),

        // 45 fokos ellenkező irányba történő mozgás
        Animated.timing(positionX, {
          toValue: randomX - bounceDistance,
          duration: 1000, // Az ugrás időtartamának beállítása
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(positionY, {
          toValue: randomY - bounceDistance,
          duration: 1000, // Az ugrás időtartamának beállítása
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ])
    ).start(() => {
      // Az animáció befejezése után kezdje újra a mozgást véletlenszerű kezdőpozícióval
      startBouncingAnimation();
    });
  };



  useEffect(() => {
    startBouncingAnimation();
  }, []);

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
    <View style={{ padding: 20, flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#252525' }}>
        {/* isConnecting && <Text style={styles.paragraph}>Connecting...</Text> }
        { isDisconnected && <Text style={styles.paragraph}>Wallet is not connected.</Text> */}
        { address ? (
        <>
            <Text style={styles.paragraph}>{`Wallet Address:\n`} {address}</Text>
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
          {/* Bouncing animation */}
      <View style={styles.bouncingContainer}>
        <Animated.Image
          source={require('./../../../assets/Frame102.png')} // Replace with your image source
          style={[
            styles.image,
            {
              transform: [
                { translateX: positionX }, // X tengelyen történő elmozdulás
                { translateY: positionY }, // Y tengelyen történő elmozdulás
              ],
            },
          ]}
        />
        
        </View>
          <Text style={styles.paragraph}>Using a crypto wallet for anonymous voting harnesses blockchain's inherent security and privacy, upholding the principles of democratic fairness and individual privacy.</Text>
          <TouchableOpacity onPress={handleConnect}>
              <View style={styles.buttonPink}>
                  <Text style={styles.buttonText}>Connect Wallet</Text>
              </View>
              <View style={styles.buttonPink}>
                  <Text style={styles.buttonText}>Create Wallet</Text>
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
        width: 400,
        color: '#bebebe',
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
        borderRadius: 20,
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
    bouncingContainer: {
      width: 300, // Az edény szélességét igazítsa a szükséghez
      height: 300, // Az edény magasságát igazítsa a szükséghez
      justifyContent: 'center',
      alignItems: 'center',
      //backgroundColor: 'lightgray', // Az edény hátterének színét igazítsa a szükséghez
    },
    image: {
      width: 268, // A pattanó kép szélességét igazítsa a szükséghez
      height: 268, // A pattanó kép magasságát igazítsa a szükség
      resizeMode: 'contain', // A kép átméretezését igazítsa a szükséghez
  },
});

export default ConnectWalletScreen;
