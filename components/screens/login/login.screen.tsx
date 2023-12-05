import React, { useState } from 'react';
import { 
    View, Text, TextInput,
    Button, ActivityIndicator, 
    TouchableHighlight, StyleSheet, Image } from 'react-native';
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
    <View style={{ padding: 20, flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#252525' }}>
      {loading ? (
        <ActivityIndicator 
        size="large" // Change the size of the loading icon (small, large, or custom)
        color="#EE0BA6" // Change the color of the loading icon
        />
      ) : (
        <>
            <Image
            source={require('./../../../assets/Property1.png')} // Replace with the actual path to your image
            style={styles.image}
            />
            <Separator />
            <Text style={styles.paragraph}>Please note that you need to prove that you are a citizen of Hungary.</Text>
            <Separator />
            <TextInput style={styles.input}
                value={username}
                onChangeText={text => setUsername(text)}
                placeholder="Username" />
            <TextInput style={styles.input} 
                placeholder="Password"
                placeholderTextColor="#bebebe"
                secureTextEntry={true} />

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
        marginBottom: 12,
        borderBottomWidth: 1,
        borderColor: '#bebebe',
        padding: 10,
        color: '#bebebe',
    },
    paragraph: {
        fontSize: 18,
        width: 300,
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

export default LoginScreen;
