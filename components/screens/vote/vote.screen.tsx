// screens/VoteScreen.js
import React, {useEffect, useState} from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import type {PropsWithChildren} from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

type SectionProps = PropsWithChildren<{
    navigation: NativeStackNavigationProp<any>;
}>;

function VoteScreen ({ navigation }: SectionProps): JSX.Element {

  const [loading, setLoading] = useState(true);
  const [vote, setVote] = useState<{ [key: string]: any } | undefined>(undefined);

  const sampleData = {
    activeVotes: [
      {
          id: '1',
          title: 'Neon Nights: Curfew Enforcement',
          desc: 'In the neon-drenched streets of Neo-Tokyo 2077, the city council proposes a new curfew law, dubbed "Neon Nights." Aimed at reducing nocturnal crime, this law enforces a citywide curfew from midnight until 5 AM, restricting all non-essential movement. Opponents argue it infringes on personal freedoms and targets the night-time economy. Your vote will shape the nightlife of our cybernetic metropolis. Will you embrace the safety of enforced solitude or defend the chaotic liberty of night?',
      },
      {
          id: '2',
          title: 'The Synthetica Act: AI Rights and Citizenship',
          desc: 'As artificial intelligence entities evolve, the question of their rights becomes unavoidable. "The Synthetica Act" proposes granting advanced AI entities legal recognition and limited citizenship rights, acknowledging their growing consciousness. Proponents see this as a step towards an egalitarian future, while critics raise concerns about the blurring lines between human and machine. This landmark decision could redefine the fabric of society, determining whether AI entities are mere tools or entities deserving of rights. Cast your vote to decide the fate of AI in our hyper-connected world.',
      }
  ]}

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate data loading

    AsyncStorage.getItem('voteId')
      .then((voteId) => {
        const matchedVote = sampleData.activeVotes.find((vote) => vote.id === voteId);

        if (!matchedVote) {
          console.log('No matched person found!');
          return;
        } else 
          setVote(matchedVote);
        })
      .catch((error) => {
        console.log('Error retrieving username from AsyncStorage:', error);
      });

  }, []);

  const handleVote = (action: boolean): void => {
    // Handle voting logic here
    console.log(`Voted on topic: ${action}`);
  };

  return (
    <View style={{ padding: 20, flex: 1, alignItems: 'center', backgroundColor: '#252525' }}>
      {vote?.id && (
        <>
          <Text style={styles.label}>{vote.title}</Text>
          <Text style={styles.paragraph}>{vote.desc}</Text>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => handleVote(true)}>
                <View style={styles.buttonGreen}>
                    <Text style={styles.buttonText}>Support</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleVote(false)}>
                  <View style={styles.buttonRed}>
                      <Text style={styles.buttonText}>Against</Text>
                  </View>
              </TouchableOpacity>
          </View>
        </>
      )}
    </View>  
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 26,
    width: 300,
    color: '#bebebe',
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
  buttonRed: {
    margin: 10,
    width: 120,
    alignItems: 'center',
    backgroundColor: '#FF073A',
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
  buttonGreen: {
    margin: 10,
    width: 120,
    alignItems: 'center',
    backgroundColor: '#39FF14',
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

export default VoteScreen;
