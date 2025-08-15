import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Logo({ letra = 'C' }) {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text style={styles.text}>{letra}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginBottom: 20 },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ea580c',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: { color: '#fff', fontSize: 32, fontWeight: 'bold' }
});