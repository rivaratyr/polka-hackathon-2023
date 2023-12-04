// screens/VoteScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import type {PropsWithChildren} from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type SectionProps = PropsWithChildren<{
    navigation: NativeStackNavigationProp<any>;
}>;

function VoteScreen ({ navigation }: SectionProps): JSX.Element {

  const handleVote = (topicId: number): void => {
    // Handle voting logic here
    console.log(`Voted on topic: ${topicId}`);
  };

  return (
    <View style={styles.container}>
      <Text>Vote on Topics</Text>
      {/* Replace with real topics */}
      <Button title="Vote on Topic 1" onPress={() => handleVote(1)} />
      <Button title="Vote on Topic 2" onPress={() => handleVote(2)} />
      <Button title="Vote on Topic 3" onPress={() => handleVote(3)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default VoteScreen;
