import React from 'react';
import { View, TextInput, Text, StyleSheet, TextInputProps } from 'react-native';
import { colors } from '../theme/colors';

// Definindo as props do componente
interface InputFieldProps extends TextInputProps {
  label: string;
}

const InputField: React.FC<InputFieldProps> = ({ 
  label, 
  value, 
  onChangeText, 
  placeholder, 
  secureTextEntry = false,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={colors.gray}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: colors.darkGray,
    fontWeight: '600',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: colors.white,
    color: colors.darkGray,
  },
});

export default InputField;