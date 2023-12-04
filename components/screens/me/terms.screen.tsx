import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import type { PropsWithChildren } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Alert } from 'react-native';

type SectionProps = PropsWithChildren<{
    navigation: StackNavigationProp<any>;
}>;

const Separator = () => <View style={styles.separator} />;

function TermsScreen ({ navigation }: SectionProps): JSX.Element {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxToggle = () => {
        setIsChecked(!isChecked);
    };

    const handleButtonPress = () => {
    if (isChecked) {
        // Navigate to another screen
        navigation.navigate('DataCalculation');
    } else {
        // Show an error message
        Alert.alert('Error', 'Please accept the terms and conditions.');
    }
};

  return (
    <View style={{ padding: 20, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.paragraph}>We need to calculate your leverage!</Text>
        <Separator />
        <TouchableOpacity onPress={handleCheckboxToggle}>
            <View>
                <Text style={styles.checkboxText}>{isChecked ? '✓' : '○'}</Text>
            </View>
        </TouchableOpacity>
        <Text style={styles.paragraph}>I accept the terms and conditons.</Text>
        <TouchableOpacity onPress={handleButtonPress}>
            <View style={styles.buttonPink}>
                <Text style={styles.buttonText}>Calculate</Text>
            </View>
        </TouchableOpacity>
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
    checkboxText: {
        textAlign: 'center',
        padding: 15,
        fontSize: 32,
        color: '#000',
    },
});


export default TermsScreen;
