import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function OrangeButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: width * 0.9,        // ocupa 90% da largura da tela
    height: height * 0.07,     // altura proporcional à tela
    backgroundColor: '#FF5C00',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * -0.05  // distância do conteúdo acima
  },
  text: {
    color: '#fff',
    fontSize: width * 0.05,
    fontWeight: '600',
  },
});
