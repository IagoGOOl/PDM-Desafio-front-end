import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import { colors } from '../theme/colors';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    // Simulação de chamada de API
    setTimeout(() => {
      console.log('Login attempt with:', { email, password });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Bem-vindo de volta</Text>
          <Text style={styles.subtitle}>Faça login na sua conta</Text>

          <InputField
             label="Email"  // Obrigatório (string) 
             value={email} 
             onChangeText={setEmail}
             placeholder="Digite seu email"
             keyboardType="email-address"
             autoCapitalize="none"
          />

          <InputField
            label="Senha"  // Obrigatório (string)
            value={password}
            onChangeText={setPassword}
            placeholder="Digite sua senha"
            secureTextEntry
          />
          <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
          <PrimaryButton
          title={isLoading ? 'Carregando...' : 'Entrar'}  // Obrigatório (string)
          onPress={handleLogin}
          disabled={isLoading || !email || !password}
          // Pode receber qualquer outra prop do TouchableOpacity
/>

          <Text style={styles.forgotPassword}>Cadastre-se</Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.darkGray,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.gray,
    marginBottom: 40,
  },
  forgotPassword: {
    color: colors.darkOrange,
    textAlign: 'center',
    marginTop: 20,
    fontSize: 14,
    fontWeight: '600',
  },
});

export default LoginScreen;