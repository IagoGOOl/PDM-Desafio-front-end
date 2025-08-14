// components/OrangeButton.js
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function OrangeButton({ title, onPress, backgroundColor }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor }]} // cor dinâmica
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: width * 0.9,
    height: height * 0.07,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -35,
  },
  text: {
    color: '#fff',
    fontSize: width * 0.05,
    fontWeight: '600',
  },
});
