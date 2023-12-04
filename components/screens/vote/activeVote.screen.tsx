// screens/ActiveVoteScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function ActiveVoteScreen (): JSX.Element {

  const handleParticipate = (voteId: number): void => {
    // Handle vote participation logic here
    console.log(`Participating in vote: ${voteId}`);
  };

  return (
    <View style={styles.container}>
      <Text>Active Votes</Text>
      {/* Replace with actual vote data */}
      <Button title="Participate in Vote 1" onPress={() => handleParticipate(1)} />
      <Button title="Participate in Vote 2" onPress={() => handleParticipate(2)} />
      {/* Add more votes as needed */}
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

export default ActiveVoteScreen;
