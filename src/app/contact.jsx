import {
  StyleSheet,
  View,
  Text,
  Appearance,
  Image,
  ScrollView,
  Pressable,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import coffeeImg from "@/assets/images/coffee-splash.png";

import { Colors } from "@/constants/theme";

export default function ContactScreen() {
  const colorScheme = Appearance.getColorScheme();
  const isDark = colorScheme === "dark";
  const theme = isDark ? Colors.dark : Colors.light;

  const styles = createStyles(theme, isDark);

  return (
    <SafeAreaView
      style={styles.container}
      {...(Platform.OS !== "web" ? { edges: ["bottom"] } : {})}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Hero Section */}
        <View style={styles.heroWrapper}>
          <Image source={coffeeImg} style={styles.heroImage} />
          <View style={styles.heroOverlay}>
            <View style={styles.statusPill}>
              <View style={styles.statusDot} />
              <Text style={styles.statusText}>Open Today • 6 AM – 4 PM</Text>
            </View>
            <Text style={styles.heroTitle}>Coffee Shop</Text>
            <Text style={styles.heroSubtitle}>
              Artisanal Roasts & Handcrafted Drinks
            </Text>
          </View>
        </View>

        {/* Quick Action Buttons */}
        <View style={styles.actionRow}>
          <Link href="tel:5555555555" asChild>
            <Pressable
              style={({ pressed }) => [
                styles.actionBtn,
                styles.callBtn,
                pressed && styles.btnPressed,
              ]}
            >
              <Ionicons name="call" size={18} color="#FFFFFF" />
              <Text style={styles.callBtnText}>Call Shop</Text>
            </Pressable>
          </Link>

          <Link href="sms:5555555555" asChild>
            <Pressable
              style={({ pressed }) => [
                styles.actionBtn,
                styles.smsBtn,
                pressed && styles.btnPressed,
              ]}
            >
              <Ionicons
                name="chatbubble-ellipses"
                size={18}
                color={isDark ? "#E0A96D" : "#7C4A27"}
              />
              <Text style={styles.smsBtnText}>Text Us</Text>
            </Pressable>
          </Link>
        </View>

        {/* Contact Info Cards */}
        <View style={styles.cardsContainer}>
          {/* Location Card */}
          <View style={styles.card}>
            <View style={styles.cardIconBox}>
              <Ionicons
                name="location-sharp"
                size={22}
                color={isDark ? "#E0A96D" : "#7C4A27"}
              />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardHeader}>Our Location</Text>
              <Text style={styles.cardPrimaryText}>555 Coffee Lane</Text>
              <Text style={styles.cardSecondaryText}>
                Kansas City, KS 55555-1234
              </Text>
            </View>
          </View>

          {/* Phone & Inquiries Card */}
          <View style={styles.card}>
            <View style={styles.cardIconBox}>
              <Ionicons
                name="call-outline"
                size={22}
                color={isDark ? "#E0A96D" : "#7C4A27"}
              />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardHeader}>Phone Number</Text>
              <Link href="tel:5555555555">
                <Text style={styles.cardLinkText}>555-555-5555</Text>
              </Link>
              <Text style={styles.cardSecondaryText}>
                Tap to dial or send a direct text
              </Text>
            </View>
          </View>

          {/* Operating Hours Card */}
          <View style={styles.card}>
            <View style={styles.cardIconBox}>
              <Ionicons
                name="time-outline"
                size={22}
                color={isDark ? "#E0A96D" : "#7C4A27"}
              />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardHeader}>Opening Hours</Text>
              <Text style={styles.cardPrimaryText}>
                Mon – Sun: 6:00 AM – 4:00 PM
              </Text>
              <Text style={styles.cardSecondaryText}>
                Fresh pastries & brews every morning
              </Text>
            </View>
          </View>

          {/* Quote & Brand Note Card */}
          <View style={styles.vibeCard}>
            <View style={styles.cupIconCircle}>
              <Ionicons
                name="cafe"
                size={22}
                color={isDark ? "#E0A96D" : "#7C4A27"}
              />
            </View>
            <Text style={styles.vibeQuote}>
              &quot;Good ideas start with brainstorming. Great ideas start with
              coffee.&quot;
            </Text>
            <Text style={styles.vibeFooter}>
              We can&apos;t wait to serve you!
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function createStyles(theme, isDark) {
  const accentColor = isDark ? "#E0A96D" : "#7C4A27";
  const cardBg = isDark ? "#17181A" : "#FFFFFF";
  const cardBorder = isDark ? "#28292D" : "#ECEBE8";
  const iconBg = isDark ? "#29241E" : "#F7EFE8";

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    scrollContent: {
      paddingBottom: 36,
    },
    heroWrapper: {
      height: 240,
      width: "100%",
      position: "relative",
      backgroundColor: isDark ? "#1F2023" : "#E2DFD8",
    },
    heroImage: {
      width: "100%",
      height: "100%",
      resizeMode: "cover",
    },
    heroOverlay: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      paddingHorizontal: 20,
      paddingVertical: 18,
      backgroundColor: "rgba(0, 0, 0, 0.58)",
      borderTopWidth: 1,
      borderTopColor: "rgba(255, 255, 255, 0.12)",
    },
    statusPill: {
      flexDirection: "row",
      alignItems: "center",
      alignSelf: "flex-start",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      borderColor: "rgba(255, 255, 255, 0.25)",
      borderWidth: 1,
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 16,
      marginBottom: 8,
      gap: 6,
    },
    statusDot: {
      width: 7,
      height: 7,
      borderRadius: 4,
      backgroundColor: "#2ECC71",
    },
    statusText: {
      color: "#FFFFFF",
      fontSize: 12,
      fontWeight: "600",
      letterSpacing: 0.2,
    },
    heroTitle: {
      color: "#FFFFFF",
      fontSize: 26,
      fontWeight: "800",
      letterSpacing: 0.5,
    },
    heroSubtitle: {
      color: "rgba(255, 255, 255, 0.85)",
      fontSize: 13,
      marginTop: 2,
    },
    actionRow: {
      flexDirection: "row",
      gap: 12,
      paddingHorizontal: 16,
      marginTop: 16,
      marginBottom: 6,
    },
    actionBtn: {
      flex: 1,
      height: 48,
      borderRadius: 14,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
    },
    btnPressed: {
      opacity: 0.82,
      transform: [{ scale: 0.98 }],
    },
    callBtn: {
      backgroundColor: accentColor,
      shadowColor: accentColor,
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.28,
      shadowRadius: 5,
      elevation: 3,
    },
    callBtnText: {
      color: "#FFFFFF",
      fontSize: 15,
      fontWeight: "700",
      letterSpacing: 0.3,
    },
    smsBtn: {
      backgroundColor: isDark ? "#232428" : "#F4EDE6",
      borderWidth: 1.5,
      borderColor: isDark ? "#38393F" : "#DBCBC0",
    },
    smsBtnText: {
      color: accentColor,
      fontSize: 15,
      fontWeight: "700",
      letterSpacing: 0.3,
    },
    cardsContainer: {
      paddingHorizontal: 16,
      marginTop: 10,
      gap: 12,
    },
    card: {
      backgroundColor: cardBg,
      borderRadius: 18,
      borderWidth: 1,
      borderColor: cardBorder,
      padding: 16,
      flexDirection: "row",
      alignItems: "center",
      gap: 14,
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: isDark ? 0.25 : 0.05,
      shadowRadius: 6,
      elevation: 2,
    },
    cardIconBox: {
      width: 44,
      height: 44,
      borderRadius: 22,
      backgroundColor: iconBg,
      alignItems: "center",
      justifyContent: "center",
    },
    cardContent: {
      flex: 1,
    },
    cardHeader: {
      color: isDark ? "#8E9097" : "#7A7570",
      fontSize: 12,
      fontWeight: "600",
      textTransform: "uppercase",
      letterSpacing: 0.6,
      marginBottom: 3,
    },
    cardPrimaryText: {
      color: theme.text,
      fontSize: 15,
      fontWeight: "600",
      lineHeight: 20,
    },
    cardSecondaryText: {
      color: isDark ? "#9A9DA5" : "#6E6963",
      fontSize: 13,
      marginTop: 2,
      lineHeight: 18,
    },
    cardLinkText: {
      color: accentColor,
      fontSize: 16,
      fontWeight: "700",
      textDecorationLine: "underline",
    },
    vibeCard: {
      backgroundColor: isDark ? "#17181A" : "#F9F6F0",
      borderRadius: 18,
      borderWidth: 1,
      borderColor: isDark ? "#28292D" : "#E8DFD5",
      borderStyle: "dashed",
      padding: 18,
      alignItems: "center",
      marginTop: 6,
    },
    cupIconCircle: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: iconBg,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 10,
    },
    vibeQuote: {
      color: theme.text,
      fontSize: 13,
      fontStyle: "italic",
      textAlign: "center",
      lineHeight: 19,
      paddingHorizontal: 12,
    },
    vibeFooter: {
      color: accentColor,
      fontSize: 12,
      fontWeight: "600",
      marginTop: 8,
      letterSpacing: 0.3,
    },
  });
}
