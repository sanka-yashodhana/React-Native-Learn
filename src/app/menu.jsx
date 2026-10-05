import {
  StyleSheet,
  Appearance,
  Platform,
  ScrollView,
  FlatList,
  View,
  Text,
  Image,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { MENU_ITEMS } from "@/constants/MenuItems";
import MenuImages from "@/constants/MenuImages";
import { Colors } from "@/constants/theme";

export default function MenuScreen() {
  const colorScheme = Appearance.getColorScheme();
  const isDark = colorScheme === "dark";
  const theme = isDark ? Colors.dark : Colors.light;

  const styles = createStyles(theme, isDark);

  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;

  const headerComponent = (
    <View style={styles.headerCard}>
      <View style={styles.headerBadge}>
        <Ionicons
          name="sparkles"
          size={13}
          color={isDark ? "#E0A96D" : "#7C4A27"}
        />
        <Text style={styles.headerBadgeText}>
          FRESHLY ROASTED SELECTION
        </Text>
      </View>
      <Text style={styles.headerTitle}>Signature Menu</Text>
      <Text style={styles.headerSubtitle}>
        Crafted with single-origin beans and artisanal care. Available hot or iced.
      </Text>
    </View>
  );

  const footerComponent = (
    <View style={styles.footerWrapper}>
      <View style={styles.vibeCard}>
        <View style={styles.cupIconCircle}>
          <Ionicons
            name="cafe"
            size={22}
            color={isDark ? "#E0A96D" : "#7C4A27"}
          />
        </View>
        <Text style={styles.vibeTitle}>Custom Brews & Add-ons</Text>
        <Text style={styles.vibeQuote}>
          Oat, almond, and soy milk available upon request. Ask our baristas about seasonal roasts!
        </Text>
        <Link href="/contact" asChild>
          <Pressable
            style={({ pressed }) => [
              styles.contactButton,
              pressed && styles.btnPressed,
            ]}
          >
            <Ionicons
              name="location-outline"
              size={16}
              color="#FFFFFF"
            />
            <Text style={styles.contactButtonText}>Visit Our Shop</Text>
            <Ionicons name="arrow-forward" size={14} color="#FFFFFF" />
          </Pressable>
        </Link>
      </View>
    </View>
  );

  return (
    <Container
      style={styles.container}
      {...(Platform.OS !== "web" ? { edges: ["bottom"] } : {})}
    >
      <FlatList
        data={MENU_ITEMS}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListHeaderComponent={headerComponent}
        ListFooterComponent={footerComponent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No Items Found</Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.menuCard}>
            <View style={styles.menuTextCol}>
              <View style={styles.itemCategoryRow}>
                <Text style={styles.itemIdBadge}>
                  #{item.id < 10 ? `0${item.id}` : item.id}
                </Text>
                <Text style={styles.itemCategoryText}>• SPECIALTY</Text>
              </View>

              <Text style={styles.menuItemTitle}>{item.title}</Text>
              <Text style={styles.menuItemDesc}>{item.description}</Text>
            </View>

            <View style={styles.imageWrapper}>
              <Image
                source={MenuImages[item.id - 1]}
                style={styles.menuImage}
              />
            </View>
          </View>
        )}
      />
    </Container>
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
    contentContainer: {
      paddingTop: 14,
      paddingBottom: 36,
      paddingHorizontal: 16,
      backgroundColor: theme.background,
    },
    headerCard: {
      backgroundColor: cardBg,
      borderRadius: 18,
      borderWidth: 1,
      borderColor: cardBorder,
      padding: 18,
      marginBottom: 16,
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: isDark ? 0.25 : 0.05,
      shadowRadius: 6,
      elevation: 2,
    },
    headerBadge: {
      flexDirection: "row",
      alignItems: "center",
      alignSelf: "flex-start",
      backgroundColor: iconBg,
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 14,
      gap: 6,
      marginBottom: 8,
    },
    headerBadgeText: {
      color: accentColor,
      fontSize: 11,
      fontWeight: "700",
      letterSpacing: 0.6,
    },
    headerTitle: {
      color: theme.text,
      fontSize: 24,
      fontWeight: "800",
      letterSpacing: 0.3,
    },
    headerSubtitle: {
      color: isDark ? "#9A9DA5" : "#6E6963",
      fontSize: 13,
      lineHeight: 19,
      marginTop: 4,
    },
    separator: {
      height: 12,
    },
    menuCard: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: cardBg,
      borderRadius: 18,
      borderWidth: 1,
      borderColor: cardBorder,
      padding: 14,
      gap: 12,
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: isDark ? 0.25 : 0.05,
      shadowRadius: 6,
      elevation: 2,
    },
    menuTextCol: {
      flex: 1,
      justifyContent: "center",
    },
    itemCategoryRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
      marginBottom: 4,
    },
    itemIdBadge: {
      color: accentColor,
      fontSize: 11,
      fontWeight: "800",
      letterSpacing: 0.4,
    },
    itemCategoryText: {
      color: isDark ? "#8E9097" : "#7A7570",
      fontSize: 10,
      fontWeight: "700",
      letterSpacing: 0.5,
    },
    menuItemTitle: {
      color: theme.text,
      fontSize: 17,
      fontWeight: "700",
      lineHeight: 22,
    },
    menuItemDesc: {
      color: isDark ? "#9A9DA5" : "#6E6963",
      fontSize: 13,
      lineHeight: 18,
      marginTop: 3,
    },
    imageWrapper: {
      width: 86,
      height: 86,
      borderRadius: 14,
      backgroundColor: iconBg,
      overflow: "hidden",
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: cardBorder,
    },
    menuImage: {
      width: "100%",
      height: "100%",
      resizeMode: "cover",
    },
    footerWrapper: {
      marginTop: 18,
    },
    vibeCard: {
      backgroundColor: isDark ? "#17181A" : "#F9F6F0",
      borderRadius: 18,
      borderWidth: 1,
      borderColor: isDark ? "#28292D" : "#E8DFD5",
      borderStyle: "dashed",
      padding: 18,
      alignItems: "center",
    },
    cupIconCircle: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: iconBg,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 8,
    },
    vibeTitle: {
      color: theme.text,
      fontSize: 15,
      fontWeight: "700",
      marginBottom: 4,
    },
    vibeQuote: {
      color: isDark ? "#9A9DA5" : "#6E6963",
      fontSize: 13,
      textAlign: "center",
      lineHeight: 18,
      paddingHorizontal: 10,
      marginBottom: 14,
    },
    contactButton: {
      backgroundColor: accentColor,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderRadius: 12,
      gap: 6,
      shadowColor: accentColor,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 2,
    },
    contactButtonText: {
      color: "#FFFFFF",
      fontSize: 13,
      fontWeight: "700",
    },
    btnPressed: {
      opacity: 0.85,
      transform: [{ scale: 0.98 }],
    },
    emptyContainer: {
      padding: 30,
      alignItems: "center",
    },
    emptyText: {
      color: isDark ? "#9A9DA5" : "#6E6963",
      fontSize: 15,
    },
  });
}
