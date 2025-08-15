import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";

export function CarDetails() {
  return (
    <ScrollView style={styles.container}>
      {/* Top bar */}
      <View style={styles.topBar}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={{ flexDirection: "row", gap: 16 }}>
          <TouchableOpacity>
            <Ionicons name="share-social-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Main car image */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/Car1.png")}
          style={styles.mainImage}
        />
      </View>

      {/* Thumbnails */}
      <View style={styles.thumbnails}>
        <Image
          source={require("../assets/Car2.png")}
          style={[styles.thumbnail, styles.selectedThumbnail]}
        />
        <Image
          source={require("../assets/Car3.png")}
          style={styles.thumbnail}
        />
        <Image
          source={require("../assets/Car4.png")}
          style={styles.thumbnail}
        />
      </View>

      {/* Car info */}
      <View style={styles.infoContainer}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Tesla Modelo 3</Text>
          <View style={styles.rating}>
            <Text style={styles.ratingText}>4.5/5</Text>
            <FontAwesome name="star" size={18} color="#FF6600" />
          </View>
        </View>
        <Text style={styles.price}>Rs. 18,00,000.00</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam
          nam eu nulla a. Vestibulum aliquet facilisi interdum nibh blandit{" "}
          <Text style={styles.readMore}>Read more...</Text>
        </Text>
      </View>

      {/* Features */}
      <View style={styles.featuresRow}>
        <View style={styles.featureBoxInverted}>
          <View style={styles.customCheckboxInverted}>
            <MaterialIcons
              name="check-box-outline-blank"
              size={20}
              color="#fff"
            />
            <MaterialIcons
              name="check"
              size={16}
              color="#FF6600"
              style={styles.checkIconInverted}
            />
          </View>
          <Text style={styles.featureTextInverted}>Autopilot</Text>
        </View>
        <View style={styles.featureBoxInverted}>
          <View style={styles.customCheckboxInverted}>
            <MaterialIcons
              name="check-box-outline-blank"
              size={20}
              color="#fff"
            />
            <MaterialIcons
              name="check"
              size={16}
              color="#FF6600"
              style={styles.checkIconInverted}
            />
          </View>
          <Text style={styles.featureTextInverted}>360° Camera</Text>
        </View>
        <Text style={styles.viewAll}>Ver tudo</Text>
      </View>

      {/* Info icons */}
      <View style={styles.iconsRow}>
        <View style={styles.iconInfo}>
          <MaterialIcons name="call" size={20} color="#222" />
          <Text style={styles.iconText}>Contate o revendedor</Text>
        </View>
        <View style={styles.iconInfo}>
          <MaterialIcons name="directions-car" size={20} color="#222" />
          <Text style={styles.iconText}>Detalhes do carro</Text>
        </View>
      </View>
      <View style={styles.iconsRow}>
        <View style={styles.iconInfo}>
          <Ionicons name="location-outline" size={20} color="#222" />
          <Text style={styles.iconText}>Sousa, Paraíba</Text>
        </View>
        <View style={styles.iconInfo}>
          <MaterialIcons name="attach-money" size={20} color="#222" />
          <Text style={styles.iconText}>EMI/Empréstimo</Text>
        </View>
      </View>

      {/* Buy button */}
      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyButtonText}>Comprar agora</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  imageContainer: {
    position: "relative",
    alignItems: "center",
    marginBottom: 12,
  },
  mainImage: {
    width: "100%",
    height: 320,
    borderRadius: 16,
    backgroundColor: "#eee",
  },
  playButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  thumbnails: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 16,
  },
  thumbnail: {
    width: 60,
    height: 40,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#eee",
  },
  selectedThumbnail: {
    borderColor: "#FF6600",
  },
  infoContainer: {
    marginBottom: 12,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingText: {
    color: "#FF6600",
    fontWeight: "bold",
    marginRight: 2,
  },
  price: {
    fontSize: 16,
    color: "#888",
    marginVertical: 4,
  },
  description: {
    color: "#444",
    fontSize: 14,
  },
  readMore: {
    color: "#FF6600",
    fontWeight: "bold",
  },
  featuresRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 12,
  },
  featureBoxInverted: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FF6600",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: "#FF6600",
    gap: 4,
  },
  featureTextInverted: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 13,
  },
  customCheckboxInverted: {
    position: "relative",
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  checkIconInverted: {
    position: "absolute",
  },
  viewAll: {
    color: "#888",
    fontWeight: "bold",
    marginLeft: 8,
    fontSize: 13,
  },
  iconsRow: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 8,
  },
  iconInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  iconText: {
    fontSize: 13,
    color: "#222",
  },
  buyButton: {
    backgroundColor: "#FF6600",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
    marginVertical: 18,
  },
  buyButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
