import React, { useState } from 'react';
import { 
    View, Text, TextInput, 
    Button, ActivityIndicator, 
    TouchableHighlight, StyleSheet } from 'react-native';
import type {PropsWithChildren} from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

type SectionProps = PropsWithChildren<{
    navigation: StackNavigationProp<any>;
}>;

const Separator = () => <View style={styles.separator} />;

function LoginScreen ({ navigation }: SectionProps): JSX.Element {
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState('');

    const handleLogin = async () => {
        setLoading(true);

        // check fields if contains value

        try {
            // Store the logged-in user's name in a session
            await AsyncStorage.setItem('username', username);

            setTimeout(() => {
                setLoading(false);
                navigation.navigate('Terms');
            }, 1300);
        } catch (error) {
            console.log('Error storing username:', error);
        }
    };

  return (
    <View style={{ padding: 20, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
            <Text style={styles.paragraph}>Please note that you need to prove that you are a citizen of Hungary.</Text>
            <Separator />
            <TextInput style={styles.input}
                value={username}
                onChangeText={text => setUsername(text)}
                placeholder="Username" />
            <TextInput style={styles.input} placeholder="Password"/>

            <TouchableHighlight onPress={handleLogin} underlayColor="transparent">
                <View style={styles.buttonPink}>
                    <Text style={styles.buttonText}>Login</Text>
                </View>
            </TouchableHighlight>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 300,
        margin: 12,
        borderBottomWidth: 1,
        borderColor: '#000',
        padding: 10,
    },
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

export default LoginScreen;
