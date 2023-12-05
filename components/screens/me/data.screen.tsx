import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import type { PropsWithChildren } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

type SectionProps = PropsWithChildren<{
  navigation: StackNavigationProp<any>;
}>;

const Separator = () => <View style={styles.separator} />;

function DataCalculationScreen ({ navigation }: SectionProps): JSX.Element {
  const [loading, setLoading] = useState(true);
  const [matchedPerson, setMatchedPerson] = useState<{ [key: string]: any } | undefined>(undefined);

  const sampleData = {
    persons: [
      {
        name: 'Alice',
        wallet: '',
        values: [1.2, 1.3, 1.4, 1.5, 1.2 * 1.3 * 1.4 * 1.5],
      },
      {
        name: 'Bob',
        wallet: '',
        values: [1.1, 1.2, 1.3, 1.4, 1.1 * 1.2 * 1.3 * 1.4],
      },
      {
        name: 'Charlie',
        wallet: '',
        values: [1.3, 1.4, 1.5, 1.6, 1.3 * 1.4 * 1.5 * 1.6],
      },
    ],
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate data loading

    AsyncStorage.getItem('username')
      .then((username) => {
        const matchedPerson = sampleData.persons.find((person) => person.name.toLowerCase() === username?.toLowerCase());

        if (!matchedPerson) {
          console.log('No matched person found!');
          return;
        } else 
          setMatchedPerson(matchedPerson);
        })
      .catch((error) => {
        console.log('Error retrieving username from AsyncStorage:', error);
      });

  }, []);

  const handleButtonPress = () => {
    AsyncStorage.setItem('leverage', matchedPerson?.values[4].toString() || 0);
    navigation.navigate('ConnectWallet');
  };

  return (
    <View style={{ padding: 20, flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#252525' }}>
      {loading ? (
        <ActivityIndicator
        size="large" // Change the size of the loading icon (small, large, or custom)
        color="#EE0BA6" // Change the color of the loading icon
      />
      ) : (
      <>
      {matchedPerson && (
        <>
          <Text style={styles.label}>Welcome {matchedPerson.name}!</Text>
          <Separator />
          <View style={styles.container}>
            <View style={styles.record}>
              <Text style={styles.recordTitle}>Tax record</Text>
              <Text style={styles.recordValue}>{matchedPerson.values[0]}</Text>
            </View>
            <View style={styles.record}>
              <Text style={styles.recordTitle}>Work record</Text>
              <Text style={styles.recordValue}>{matchedPerson.values[1]}</Text>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.record}>
              <Text style={styles.recordTitle}>Justice record</Text>
              <Text style={styles.recordValue}>{matchedPerson.values[2]}</Text>
            </View>
            <View style={styles.record}>
              <Text style={styles.recordTitle}>Family record</Text>
              <Text style={styles.recordValue}>{matchedPerson.values[3]}</Text>
            </View>
          </View>
          <Separator />
          <Text style={styles.paragraph}>Your leverage</Text>
          <Text style={styles.extremeValue}>{matchedPerson.values[4]}</Text>
        </>
      )}
      <Text style={styles.paragraph}>To participate in the DAO and the dcision-making process, you need to connect a crypto wallet to your account.</Text>
      <TouchableOpacity onPress={handleButtonPress}>
          <View style={styles.buttonPink}>
              <Text style={styles.buttonText}>Connect your wallet</Text>
          </View>
      </TouchableOpacity>
      </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 26,
    width: 300,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30
  },
  extremeValue: {
    fontSize: 36,
    width: 300,
    color: '#EE0BA6',
    textAlign: 'center',
    marginBottom: 10
  },
  paragraph: {
      fontSize: 18,
      width: 300,
      color: '#bebebe',
      textAlign: 'center',
      marginBottom: 10
  },
  separator: {
      marginVertical: 10,
      borderBottomColor: '#000',
      borderBottomWidth: StyleSheet.hairlineWidth,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  record: {
    backgroundColor: '#000',
    alignContent: 'flex-start',
    width: 140,
    marginRight: 20,
    borderRadius: 5,
      shadowColor: '#fff',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      elevation: 8,
  },
  recordTitle: {
    fontSize: 18,
    color: '#EE0BA6',
    textAlign: 'center',
    margin: 10
  },
  recordValue: { 
    fontSize: 24,
    color: '#EE0BA6',
    textAlign: 'center',
    margin: 10
  },
  buttonPink: {
      marginTop: 10,
      marginBottom: 10,
      width: 260,
      alignItems: 'center',
      backgroundColor: '#EE0BA6',
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
});

export default DataCalculationScreen;