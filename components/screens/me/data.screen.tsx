import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

function DataCalculationScreen (): JSX.Element {
  const [loading, setLoading] = useState(true);

  const sampleData = {
    persons: [
      {
        name: 'Alice',
        values: [1.2, 1.3, 1.4, 1.5, 1.2 * 1.3 * 1.4 * 1.5],
      },
      {
        name: 'Bob',
        values: [1.1, 1.2, 1.3, 1.4, 1.1 * 1.2 * 1.3 * 1.4],
      },
      {
        name: 'Charlie',
        values: [1.3, 1.4, 1.5, 1.6, 1.3 * 1.4 * 1.5 * 1.6],
      },
    ],
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate data loading
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={{ padding: 20, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Data Calculation Screen</Text>
      


    </View>
  );
};

export default DataCalculationScreen;
