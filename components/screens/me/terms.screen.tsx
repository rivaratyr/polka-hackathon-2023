import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
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
    <View style={{  padding: 20, flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#252525' }}>
        <Text style={styles.paragraph}>{`To start using the application, we need to calculate your leverage.\n\nYou can learn more about the method of the calculation on the link below.`}</Text>
        <Text style={styles.link}>I want to learn more about the leverage calculation.</Text>
        <Image
        source={require('./../../../assets/Group.png')} // Replace with the actual path to your image
        style={styles.image}
      />
        <Separator />
        <TouchableOpacity onPress={handleCheckboxToggle}>
            <View>
                <Text style={styles.checkboxText}>{isChecked ? '☑' : '☐'}</Text>
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
        width: 400,
        color: '#bebebe',
        textAlign: 'center',
        marginBottom: 10
    },
    link: {
      fontSize: 18,
      width: 400,
      color: '#EE0BA6',
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
    checkboxText: {
        textAlign: 'center',
        padding: 15,
        fontSize: 32,
        color: '#bebebe',
    },
});

export default TermsScreen;