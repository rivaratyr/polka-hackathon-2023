// components/CustomHeader.js or CustomHeader.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';

function Header (): JSX.Element {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        <Text>☰</Text> {/* Hamburger Icon */}
      </TouchableOpacity>
      <Text style={styles.headerTitle}>My App</Text>
      {/* ... other header content */}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#eee',
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