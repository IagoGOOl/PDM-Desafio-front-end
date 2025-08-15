// CarStoreScreen.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const featuredCars = [
  { id: '1', image: require('./assets/tesla'), name: 'Tesla model 3 standard Range plus' },
  { id: '2', image: require('./assets/BMW.png'), name: 'BMW X5 M' },
];

const recommendedCars = [
  {
    id: '1',
    image: require('./assets/audi.png'),
    name: 'Audi e-tron Premium',
    price: 'R$ 5.477.823,73',
  },
  {
    id: '2',
    image: require('./assets/suzuki.png'),
    name: 'Suzuki Swift',
    price: 'R$ 585.000',
  },
];

const CarStoreScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="menu" size={24} color="black" />
        <Text style={styles.title}>CarStore</Text>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Honda Pilot 7-passageiro"
          style={styles.searchInput}
        />
        <Ionicons name="options-outline" size={24} color="gray" />
      </View>

      <ScrollView>
        <View style={styles.featuredContainer}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={featuredCars}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.featuredCard}>
                <View style={styles.featuredRibbon}>
                  <Text style={styles.ribbonText}>Featured</Text>
                </View>
                <Image source={item.image} style={styles.featuredImage} />
                <Text style={styles.featuredText}>{item.name}</Text>
              </View>
            )}
          />
        </View>

        <View style={styles.recommendationsHeader}>
          <Text style={styles.recommendationsTitle}>Recomendações</Text>
          <Text style={styles.seeAll}>Ver todos</Text>
        </View>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={recommendedCars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={item.image} style={styles.cardImage} />
              <Text style={styles.views}>360 Visualizações</Text>
              <Text style={styles.carName}>{item.name}</Text>
              <Text style={styles.carPrice}>{item.price}</Text>
            </View>
          )}
        />
      </ScrollView>

      <View style={styles.bottomNav}>
        <Ionicons name="home" size={28} color="#FF6600" />
        <Ionicons name="heart-outline" size={28} color="gray" />
        <Ionicons name="person-outline" size={28} color="gray" />
      </View>
    </SafeAreaView>
  );
};

export default CarStoreScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    marginTop: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: { fontSize: 20, fontWeight: 'bold', color: '#FF6600' },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    margin: 20,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  searchInput: { flex: 1, fontSize: 16, marginLeft: 10 },
  featuredContainer: { paddingLeft: 20 },
  featuredCard: {
    marginRight: 15,
    width: 250,
    height: 150,
    position: 'relative',
  },
  featuredRibbon: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: '#FF6600',
    paddingHorizontal: 10,
    paddingVertical: 2,
    top: 10,
    left: 10,
    borderRadius: 4,
  },
  ribbonText: { color: '#fff', fontWeight: 'bold' },
  featuredImage: { width: '100%', height: '100%', borderRadius: 10 },
  featuredText: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 5,
    borderRadius: 5,
  },
  recommendationsHeader: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  recommendationsTitle: { fontSize: 18, fontWeight: 'bold' },
  seeAll: { color: '#FF6600' },
  card: {
    width: 160,
    marginLeft: 20,
    marginVertical: 10,
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  views: { fontSize: 12, color: 'orange', marginTop: 4 },
  carName: { fontWeight: 'bold', marginTop: 5 },
  carPrice: { color: 'gray' },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});

