import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Logo from '../components/Logo';
import Input from '../components/Input';
import Button from '../components/Button';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';

export default function SignUpScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>
      <Logo letra="C" />

      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>Encontre o carro dos seus sonhos!</Text>

      <Input placeholder="Nome completo" icon="person-outline" value={nome} onChangeText={setNome} />
      <Input placeholder="Email" icon="mail-outline" value={email} onChangeText={setEmail} />
      <Input placeholder="Número do telefone" icon="call-outline" value={telefone} onChangeText={setTelefone} />
      <Input placeholder="Senha" icon="lock-closed-outline" value={senha} onChangeText={setSenha} secureTextEntry />

      <Button title="Sign Up" onPress={() => console.log('Cadastrar', { nome, email, telefone, senha })} />

      <View style={styles.divider}>
        <View style={styles.line} />
        <Text style={styles.or}>Or</Text>
        <View style={styles.line} />
      </View>

      <Text style={styles.socialTitle}>Cadastrar com</Text>

      <View style={styles.socialContainer}>
        <Feather name="facebook" size={24} color="black" />
        <Feather name="instagram" size={24} color="black" />
        <Feather name="youtube" size={24} color="black" />
      </View>

      <View style={styles.footer}>
        <Text style={{ opacity: 0.4 }}>Já tem uma conta? </Text>
        <TouchableOpacity>
          <Text style={{ color: '#ea580c', fontWeight: '500' }}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', paddingTop: 50, backgroundColor: '#f5f5f5' },
  title: { fontSize: 20, fontWeight: '600', marginBottom: 5 },
  subtitle: { fontSize: 14, color: '#333', marginBottom: 20 },
  divider: { flexDirection: 'row', alignItems: 'center', marginVertical: 15, width: '90%' },
  line: { flex: 1, height: 1, backgroundColor: '#d6d3d1' },
  or: { marginHorizontal: 10, color: '#d6d3d1', fontWeight: '500' },
  socialTitle: { fontSize: 12, color: '#ea580c', fontWeight: '500', marginBottom: 10 },
  socialContainer: { flexDirection: 'row', justifyContent: 'space-between', width: 120, marginBottom: 20 },
  footer: { flexDirection: 'row', alignItems: 'center', marginTop: 'auto', marginBottom: 30 }
});
