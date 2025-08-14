// components/IconButton.js
import React from 'react';
import { Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

export default function IconButton({ source, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Image source={source} style={styles.icon} resizeMode="contain" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute', // mantém a posição se necessário
  },
  icon: {
    width: width * 0.06,  // tamanho proporcional à tela
    height: width * 0.06,
  },
});
