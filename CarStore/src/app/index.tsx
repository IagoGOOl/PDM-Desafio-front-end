import IconButton from '@/components/IconButton';
import OrangeButton from '@/components/OrangeButton';
import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function CarScreen() {

const [buttonPressed, setButtonPressed] = useState(false); // estado da cor do botão


  return (
    <View style={styles.container}>

       <IconButton 
        source={require('@/assets/images/seta.png')}
        onPress={() => console.log('Voltar')}
        style={{ top: 40, left: 20 }}
      />
      <IconButton 
        source={require('@/assets/images/share.png')}
        onPress={() => console.log('Compartilhar')}
        style={{ top: 40, right: 20 }}
      />

      <Image 
        source={require('@/assets/images/car.png')}
        style={styles.carImage}
        resizeMode="contain"
      />

      <Text style={styles.carModelName}>Tesla Modelo 3</Text>

      <TouchableOpacity style={styles.playVideoButton}>
        <Text style={styles.playVideoText}>Assistir Vídeo</Text>
      </TouchableOpacity>

      <View style={styles.rating}>
        <Text style={styles.carScore}>4.5/5</Text>
        <Image 
          source={require('@/assets/images/nota.png')}
          style={styles.notaIcon}
          resizeMode="contain"
        />
      </View>

       <OrangeButton
        title="Comprar Agora"
        backgroundColor={buttonPressed ? '#e04a00' : '#FF5C00'} // alterna cor
        onPress={() => setButtonPressed(!buttonPressed)}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: height * 0.15, // posição relativa ao topo da tela
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  carImage: {
    width: width * 6,      // ocupa 90% da largura da tela
    height: height * 0.7,    // altura maior, proporcional à tela
    bottom:27, // distância do topo proporcional
  },
  carModelName: {
    fontSize: 22,
    fontWeight: '600',
    right: 73,
    marginTop: height * 0.001, // distância da imagem proporcional
    color: '#040415',
    textAlign: 'center',
  },
  playVideoButton: {
    marginTop: height * 0.00, // distância do nome do carro
    right: 100,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 2,
  },
  playVideoText: {
    fontSize: 15,
    color: '#040415',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.03, // distância do botão
  },
  carScore: {
    fontSize: 16,
    color: '#FC6828',
    marginRight: 5,
    left: 100,
    bottom: 87,
  },
  notaIcon: {
    width: 24,
    height: 24,
    left: 100,
    bottom: 87,
  },
});
