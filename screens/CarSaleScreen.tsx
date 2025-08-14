// src/screens/CarSaleScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CarSaleScreen = () => {
  const [condition, setCondition] = useState<'Novo' | 'Usado'>('Novo');
  const [checkboxes, setCheckboxes] = useState({
    Alarme: false,
    Bluetooth: false,
    'Controle de cruzeiro': false,
    'Sensor de estacionamento': false,
  });

  const toggleCheckbox = (key: string) => {
    setCheckboxes(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {/* Botão voltar */}
        <TouchableOpacity style={{ marginTop: 10, marginBottom: 30 }}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        {/* Título */}
        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>Título</Text>
        <TextInput
          placeholder="coloque o título"
          style={{
            height: 50,
            backgroundColor: '#e5e5e5',
            borderRadius: 10,
            paddingHorizontal: 10,
            marginBottom: 20,
          }}
        />

        {/* Condições e Ano */}
        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>Condições</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
          {['Novo', 'Usado'].map(item => (
            <TouchableOpacity
              key={item}
              onPress={() => setCondition(item as 'Novo' | 'Usado')}
              style={{ flexDirection: 'row', alignItems: 'center', marginRight: 20 }}
            >
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 100, // totalmente redondo
                  borderWidth: 1,
                  borderColor: '#000',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 5,
                  backgroundColor: condition === item ? '#000' : '#fff',
                }}
              />
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}

          {/* Ano */}
          <View style={{ marginLeft: 20, flex: 1 }}>
            <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 5 }}>Ano</Text>
            <TextInput
              placeholder="Ano"
              style={{
                height: 50,
                backgroundColor: '#e5e5e5',
                borderRadius: 10,
                paddingHorizontal: 10,
              }}
            />
          </View>
        </View>

        {/* Marca e Modelo com seta para baixo */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
          <View style={{ flex: 1, marginRight: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: '600' }}>Marca</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: 50,
                backgroundColor: '#e5e5e5',
                borderRadius: 10,
                paddingHorizontal: 10,
                marginTop: 5,
              }}
            >
              <TextInput
                placeholder="Selecione a marca"
                style={{ flex: 1 }}
              />
              <Ionicons name="chevron-down" size={20} color="black" />
            </View>
          </View>
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: '600' }}>Modelo</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: 50,
                backgroundColor: '#e5e5e5',
                borderRadius: 10,
                paddingHorizontal: 10,
                marginTop: 5,
              }}
            >
              <TextInput
                placeholder="Selecione o modelo"
                style={{ flex: 1 }}
              />
              <Ionicons name="chevron-down" size={20} color="black" />
            </View>
          </View>
        </View>

        {/* Input Search */}
        <TextInput
          placeholder="Search"
          style={{
            height: 40,
            backgroundColor: '#e5e5e5',
            borderRadius: 10,
            paddingHorizontal: 10,
            marginBottom: 20,
          }}
        />

        {/* Características */}
        <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 5 }}>Características</Text>
        <TextInput
          placeholder="Search"
          style={{
            height: 40,
            backgroundColor: '#e5e5e5',
            borderRadius: 10,
            paddingHorizontal: 10,
            marginBottom: 20,
          }}
        />

        {/* Checkboxes */}
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 20 }}>
          {Object.keys(checkboxes).map(key => (
            <TouchableOpacity
              key={key}
              onPress={() => toggleCheckbox(key)}
              style={{ flexDirection: 'row', alignItems: 'center', width: '50%', marginBottom: 10 }}
            >
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 4,
                  borderWidth: 1,
                  borderColor: '#000',
                  marginRight: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: checkboxes[key] ? '#000' : '#fff',
                }}
              />
              <Text>{key}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Localização e Preço lado a lado */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
          {/* Localização */}
          <View style={{ flex: 1, marginRight: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 5 }}>Localização</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: 50,
                backgroundColor: '#e5e5e5',
                borderRadius: 10,
                paddingHorizontal: 10,
              }}
            >
              <Ionicons name="location-sharp" size={20} color="black" style={{ marginRight: 5 }} />
              <TextInput
                placeholder="Sua localização"
                style={{ flex: 1 }}
              />
            </View>
          </View>

          {/* Preço */}
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 5 }}>Preço</Text>
            <TextInput
              placeholder="Informe o preço"
              style={{
                height: 50,
                backgroundColor: '#e5e5e5',
                borderRadius: 10,
                paddingHorizontal: 10,
              }}
            />
          </View>
        </View>

        {/* Descrição */}
        <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 5 }}>Descrição</Text>
        <TextInput
          placeholder="Escreva uma descrição sobre seu carro"
          multiline
          style={{
            height: 100,
            backgroundColor: '#e5e5e5',
            borderRadius: 10,
            padding: 10,
            textAlignVertical: 'top',
            marginBottom: 20,
          }}
        />

        {/* Upload imagens/videos centralizado */}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
          }}
        >
          <Ionicons name="camera" size={35} color="black" />
          <Text style={{ marginLeft: 10, fontWeight: '600', fontSize: 16 }}>Upload images/Video</Text>
        </TouchableOpacity>

        {/* Botão final */}
        <TouchableOpacity
          style={{
            height: 60,
            backgroundColor: '#f97316',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 50,
          }}
        >
          <Text style={{ color: '#fff', fontWeight: '600', fontSize: 18 }}>Venda seu carro</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CarSaleScreen;
