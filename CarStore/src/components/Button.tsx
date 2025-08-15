import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '90%',
    height: 55,
    backgroundColor: '#ea580c',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600'
  }
});