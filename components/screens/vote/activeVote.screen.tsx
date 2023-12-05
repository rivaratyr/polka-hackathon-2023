// screens/ActiveVoteScreen.js
import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import type { PropsWithChildren } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

type SectionProps = PropsWithChildren<{
  navigation: StackNavigationProp<any>;
}>;

function ActiveVoteScreen ({ navigation }: SectionProps): JSX.Element {

  const handleParticipate = (voteId: number): void => {
    console.log(`Participating in vote: ${voteId}`);

    AsyncStorage.setItem('voteId', voteId.toString());

    navigation.navigate('Vote', { voteId: voteId });
  };

  const sampleData = {
    activeVotes: [
      {
          id: 1,
          title: 'Neon Nights: Curfew Enforcement',
          desc: 'In the neon-drenched streets of Neo-Tokyo 2077, the city council proposes a new curfew law, dubbed "Neon Nights." Aimed at reducing nocturnal crime, this law enforces a citywide curfew from midnight until 5 AM, restricting all non-essential movement. Opponents argue it infringes on personal freedoms and targets the night-time economy. Your vote will shape the nightlife of our cybernetic metropolis. Will you embrace the safety of enforced solitude or defend the chaotic liberty of night?',
      },
      {
          id: 2,
          title: 'The Synthetica Act: AI Rights and Citizenship',
          desc: 'As artificial intelligence entities evolve, the question of their rights becomes unavoidable. "The Synthetica Act" proposes granting advanced AI entities legal recognition and limited citizenship rights, acknowledging their growing consciousness. Proponents see this as a step towards an egalitarian future, while critics raise concerns about the blurring lines between human and machine. This landmark decision could redefine the fabric of society, determining whether AI entities are mere tools or entities deserving of rights. Cast your vote to decide the fate of AI in our hyper-connected world.',
      }
  ]}

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#EFEFEF'}}>
      <ScrollView>
        <View style={{ padding: 20, flex: 1, alignItems: 'center', backgroundColor: '#252525' }}>
          <Text style={styles.label}>Active Votes</Text>

          {sampleData.activeVotes.map((vote) => (
            <View style={styles.record} key={vote.id}>
              <Text style={styles.recordTitle}>{vote.title}</Text>
              <Text style={styles.recordDescription}>{vote.desc}</Text>
              <TouchableOpacity onPress={() => handleParticipate(vote.id)}>
                  <View style={styles.buttonPink}>
                      <Text style={styles.buttonText}>Vote</Text>
                  </View>
              </TouchableOpacity>
            </View>
          ))}
          
        </View>
      </ScrollView>
    </SafeAreaView>
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
    color: '#000',
    textAlign: 'center',
    marginBottom: 10
  },
  record: {
    backgroundColor: '#bebebe',
    alignContent: 'flex-start',
    width: 320,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    marginBottom: 10
  },
  recordTitle: {
    fontSize: 18,
    color: '#000',
    textAlign: 'left',
    margin: 10
  },
  recordDescription: { 
    fontSize: 14,
    color: 'black',
    textAlign: 'left',
    margin: 10,  
  },
  buttonPink: {
    margin: 10,
    width: 160,
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
});

export default ActiveVoteScreen;
