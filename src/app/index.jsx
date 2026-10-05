import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  Appearance,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import icedCofeeImg from "@/assets/images/iced-coffee.png";
import { Colors } from "@/constants/theme";

export default function HomeScreen() {
  const colorScheme = Appearance.getColorScheme();
  const isDark = colorScheme === "dark";
  const theme = isDark ? Colors.dark : Colors.light;

  const styles = createStyles(theme, isDark);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={icedCofeeImg}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <View style={styles.darkOverlay}>
          <SafeAreaView
            style={styles.safeArea}
            {...(Platform.OS !== "web" ? { edges: ["top", "bottom"] } : {})}
          >
            {/* Top Brand Pill */}
            <View style={styles.topBadgeWrapper}>
              <View style={styles.brandPill}>
                <Ionicons
                  name="cafe"
                  size={15}
                  color={isDark ? "#E0A96D" : "#F4ECE4"}
                />
                <Text style={styles.brandPillText}>
                  ARTISAN COFFEE ROASTERS
                </Text>
              </View>
            </View>

            {/* Central Hero Branding */}
            <View style={styles.heroContent}>
              <Text style={styles.title}>Coffee Shop</Text>
              <Text style={styles.subtitle}>
                Experience the rich aroma of specialty single-origin beans,
                handcrafted brews, and warm atmosphere.
              </Text>

              {/* Feature Pills */}
              <View style={styles.featuresRow}>
                <View style={styles.featureItem}>
                  <Text style={styles.featureBullet}>🌿</Text>
                  <Text style={styles.featureText}>Organic Beans</Text>
                </View>
                <View style={styles.featureItem}>
                  <Text style={styles.featureBullet}>☕</Text>
                  <Text style={styles.featureText}>Fresh Brews</Text>
                </View>
                <View style={styles.featureItem}>
                  <Text style={styles.featureBullet}>🥐</Text>
                  <Text style={styles.featureText}>Daily Pastries</Text>
                </View>
              </View>
            </View>

            {/* Action Buttons Section */}
            <View style={styles.actionSection}>
              <Link href="/menu" asChild>
                <Pressable
                  style={({ pressed }) => [
                    styles.primaryButton,
                    pressed && styles.buttonPressed,
                  ]}
                >
                  <Ionicons name="restaurant-outline" size={20} color="#FFFFFF" />
                  <Text style={styles.primaryButtonText}>Explore Menu</Text>
                  <Ionicons
                    name="arrow-forward"
                    size={18}
                    color="#FFFFFF"
                    style={styles.arrowIcon}
                  />
                </Pressable>
              </Link>

              <Link href="/contact" asChild>
                <Pressable
                  style={({ pressed }) => [
                    styles.secondaryButton,
                    pressed && styles.buttonPressed,
                  ]}
                >
                  <Ionicons
                    name="location-outline"
                    size={20}
                    color="#FFFFFF"
                  />
                  <Text style={styles.secondaryButtonText}>
                    Location & Contact
                  </Text>
                </Pressable>
              </Link>
            </View>
          </SafeAreaView>
        </View>
      </ImageBackground>
    </View>
  );
}

function createStyles(theme, isDark) {
  const accentColor = isDark ? "#E0A96D" : "#C88A58";

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#000000",
    },
    backgroundImage: {
      width: "100%",
      height: "100%",
      flex: 1,
    },
    darkOverlay: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.52)",
    },
    safeArea: {
      flex: 1,
      paddingHorizontal: 22,
      justifyContent: "space-between",
      paddingVertical: 18,
    },
    topBadgeWrapper: {
      alignItems: "center",
      marginTop: 8,
    },
    brandPill: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.65)",
      borderWidth: 1,
      borderColor: "rgba(255, 255, 255, 0.2)",
      borderRadius: 20,
      paddingHorizontal: 14,
      paddingVertical: 6,
      gap: 8,
    },
    brandPillText: {
      color: "#FFFFFF",
      fontSize: 11,
      fontWeight: "700",
      letterSpacing: 1,
    },
    heroContent: {
      alignItems: "center",
      paddingHorizontal: 10,
    },
    title: {
      color: "#FFFFFF",
      fontSize: 44,
      fontWeight: "900",
      textAlign: "center",
      letterSpacing: 0.5,
      textShadowColor: "rgba(0, 0, 0, 0.6)",
      textShadowOffset: { width: 0, height: 2 },
      textShadowRadius: 8,
    },
    subtitle: {
      color: "rgba(255, 255, 255, 0.88)",
      fontSize: 15,
      lineHeight: 22,
      textAlign: "center",
      marginTop: 12,
      maxWidth: 340,
      textShadowColor: "rgba(0, 0, 0, 0.4)",
      textShadowOffset: { width: 0, height: 1 },
      textShadowRadius: 4,
    },
    featuresRow: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 8,
      marginTop: 20,
    },
    featureItem: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "rgba(255, 255, 255, 0.12)",
      borderColor: "rgba(255, 255, 255, 0.22)",
      borderWidth: 1,
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 14,
      gap: 5,
    },
    featureBullet: {
      fontSize: 12,
    },
    featureText: {
      color: "#FFFFFF",
      fontSize: 12,
      fontWeight: "600",
    },
    actionSection: {
      width: "100%",
      maxWidth: 420,
      alignSelf: "center",
      gap: 12,
      marginBottom: 10,
    },
    primaryButton: {
      backgroundColor: accentColor,
      height: 54,
      borderRadius: 16,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 20,
      gap: 10,
      shadowColor: accentColor,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.4,
      shadowRadius: 8,
      elevation: 4,
    },
    primaryButtonText: {
      color: "#FFFFFF",
      fontSize: 16,
      fontWeight: "700",
      letterSpacing: 0.3,
    },
    arrowIcon: {
      marginLeft: "auto",
    },
    secondaryButton: {
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      borderWidth: 1.5,
      borderColor: "rgba(255, 255, 255, 0.35)",
      height: 52,
      borderRadius: 16,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 20,
      gap: 10,
    },
    secondaryButtonText: {
      color: "#FFFFFF",
      fontSize: 15,
      fontWeight: "700",
      letterSpacing: 0.3,
    },
    buttonPressed: {
      opacity: 0.85,
      transform: [{ scale: 0.98 }],
    },
  });
}
