import React, { useState } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import type {PropsWithChildren} from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type SectionProps = PropsWithChildren<{
    navigation: NativeStackNavigationProp<any>;
}>;

function LoginScreen ({ navigation }: SectionProps): JSX.Element {
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('DataCalculation');
    }, 1300);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          <Text>Login Screen</Text>
          <Button title="Login" onPress={handleLogin} />
        </>
      )}
    </View>
  );
};

export default LoginScreen;
