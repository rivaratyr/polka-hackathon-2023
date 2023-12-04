// screens/TopicScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function CreateVoteScreen (): JSX.Element {
  const [topic, setTopic] = useState('');

  const handleCreateTopic = () => {
    // Handle topic creation logic here
    console.log(topic);
  };

  return (
    <View style={styles.container}>
      <Text>Create a New Topic</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Topic"
        value={topic}
        onChangeText={setTopic}
      />
      <Button title="Create Topic" onPress={handleCreateTopic} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '80%',
    padding: 10,
    margin: 10,
  },
});

export default CreateVoteScreen;
