import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Logo from '../components/Logo';
import Input from '../components/Input';
import Button from '../components/Button';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';

export default function LoginScreens() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>
      <Logo letra="C" />

      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Bem vindo ao CarStore</Text>

      <Input placeholder="Email" icon="mail-outline" value={email} onChangeText={setEmail} />
      <Input placeholder="Senha" icon="lock-closed-outline" value={senha} onChangeText={setSenha} secureTextEntry />

      <Text style={{ color: '#ea580c', fontWeight: '500' }}> esqueceu a senha </Text>

      <Button title="Login" onPress={() => console.log('login', { email, senha })} />


      <View style={styles.footer}>
        <Text style={{ opacity: 0.4 }}>Não tem uma conta?</Text>
        <TouchableOpacity>
          <Text style={{ color: '#ea580c', fontWeight: '500' }}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', paddingTop: 120, backgroundColor: '#f5f5f5' },
  title: { fontSize: 20, fontWeight: '600', marginBottom: 20, height:30 },
  subtitle: { fontSize: 14, color: '#333', marginBottom: 20 },
  divider: { flexDirection: 'row', alignItems: 'center', marginVertical: 15, width: '90%' },
  line: { flex: 1, height: 1, backgroundColor: '#d6d3d1' },
  or: { marginHorizontal: 60, color: '#d6d3d1', fontWeight: '500' },
  socialTitle: { fontSize: 12, color: '#ea580c', fontWeight: '500', marginBottom: 10 },
  socialContainer: { flexDirection: 'row', justifyContent: 'space-between', width: 120, marginBottom: 60 },
  footer: { flexDirection: 'row', alignItems: 'center', marginBottom: 30 }
});