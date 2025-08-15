import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type InputProps = {
  placeholder: string;
  icon: keyof typeof Ionicons.glyphMap; // garante que o ícone seja válido
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
} & Omit<TextInputProps, 'onChangeText' | 'value' | 'placeholder' | 'secureTextEntry'>;

export default function Input({ placeholder, icon, value, onChangeText, secureTextEntry }: InputProps) {
  return (
    <View style={styles.container}>
      <Ionicons name={icon} size={20} color="#9ca3af" style={{ marginHorizontal: 10 }} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#9ca3af"
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 55,
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 2
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500'
  }
});