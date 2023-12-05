// components/CustomHeader.js or CustomHeader.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';

type Props = {
    headerTitle: string;
};

function Header ({headerTitle}: Props): JSX.Element {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        <Text>☰</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{headerTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#1c1c1c',
    // ... other styling
  },
  headerTitle: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    // ... other styling
  },
  // ... other styles
});

export default Header;
