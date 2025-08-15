import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
  TextInput,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

type ModalSectionProps = {
  title: string;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

type PriceRange = [number, number];

const CarStoreScreen: React.FC = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [priceRange, setPriceRange] = useState<PriceRange>([0, 3000000]);

  const ModalSection: React.FC<ModalSectionProps> = ({ title, children, style }) => (
    <View style={[styles.modalSection, style]}>
      <Text style={styles.modalSectionTitle}>{title}</Text>
      {children}
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>CarStore</Text>
      </View>

      {/* Todos Section */}
      <TouchableOpacity
        style={styles.section}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.sectionTitle}>Todos</Text>
        <View style={styles.item}>
          <Text>Honda Pilot 7: Postsogelros</Text>
        </View>
        <View style={styles.item}>
          <Text>novo</Text>
        </View>
        <View style={styles.item}>
          <Text>Usados</Text>
        </View>
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>

            <ScrollView>
              {/* Modelo Section */}
              <ModalSection title="Modelo">
                <View style={styles.modalItem}>
                  <Text>Localizocção</Text>
                </View>
                <View style={styles.modalItem}>
                  <Text>Microa</Text>
                </View>
              </ModalSection>

              {/* Price Range Section */}
              <ModalSection title="Price Range">
                <Text>Rs.{priceRange[0]} - Rs {priceRange[1].toLocaleString()}.00</Text>
                {/* You would replace this with an actual range slider component */}
                <View style={styles.sliderPlaceholder} />
              </ModalSection>

              {/* Search Button */}
              <TouchableOpacity style={styles.searchButton}>
                <Text style={styles.searchButtonText}>Pesquisar</Text>
              </TouchableOpacity>

              {/* Price Info */}
              <View style={styles.priceInfo}>
                <Text style={styles.priceLabel}>At.</Text>
                <Text>Rs. 54,77,823.73</Text>
                <Text>Rs. 5,85,000</Text>
              </View>

              {/* Views Info */}
              <View style={styles.viewsInfo}>
                <Text>360 Visualizados</Text>
                <Text>360 Visualizadas</Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// Define types for styles
type Styles = {
  container: ViewStyle;
  header: ViewStyle;
  headerTitle: TextStyle;
  section: ViewStyle;
  sectionTitle: TextStyle;
  item: ViewStyle;
  modalContainer: ViewStyle;
  modalContent: ViewStyle;
  closeButton: ViewStyle;
  closeButtonText: TextStyle;
  modalSection: ViewStyle;
  modalSectionTitle: TextStyle;
  modalItem: ViewStyle;
  sliderPlaceholder: ViewStyle;
  searchButton: ViewStyle;
  searchButtonText: TextStyle;
  priceInfo: ViewStyle;
  priceLabel: TextStyle;
  viewsInfo: ViewStyle;
};

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  item: {
    paddingVertical: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: '80%',
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 8,
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalSection: {
    marginBottom: 20,
  },
  modalSectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalItem: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  sliderPlaceholder: {
    height: 30,
    backgroundColor: '#f0f0f0',
    marginVertical: 10,
    borderRadius: 5,
  },
  searchButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  priceInfo: {
    marginVertical: 10,
  },
  priceLabel: {
    fontWeight: 'bold',
  },
  viewsInfo: {
    marginVertical: 10,
  },
});

export default CarStoreScreen;