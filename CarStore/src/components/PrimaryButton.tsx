import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';
import { colors } from '../theme/colors';

// Definindo as props do componente
interface PrimaryButtonProps extends TouchableOpacityProps {
  title: string;
  disabled?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ 
  title, 
  onPress, 
  disabled = false,
  ...rest 
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabledButton]}
      onPress={onPress}
      disabled={disabled}
      {...rest}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.darkOrange,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  disabledButton: {
    opacity: 0.8,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PrimaryButton;