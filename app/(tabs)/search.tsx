import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { BOOKS } from "@/constants/books";
import { PageHeader } from "@/components/page-header";

const categories = ["Semua", "Fiksi", "Roman", "Fantasi", "Non-Fiksi"];
const writers = ["Semua", "Thari", "Roman", "Fantasi", "Non-Fiksi"];

const searchResults = BOOKS.slice(0, 3);

export default function SearchScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <PageHeader title="Pencarian" subtitle="Temukan bacaan favorit" />

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.cardTitleWrapper}>
            <TouchableOpacity style={styles.backButton}>
              <Ionicons name="arrow-back" size={20} color="#7C3AED" />
            </TouchableOpacity>
            <View>
              <Text style={styles.cardLabel}>Veritas</Text>
              <Text style={styles.cardTitle}>Pencarian Buku</Text>
            </View>
          </View>
          <Ionicons name="bookmark-outline" size={20} color="#C3BADF" />
        </View>

        <View style={styles.searchField}>
          <Ionicons name="search-outline" size={18} color="#B7B3CB" />
          <TextInput
            placeholder="Cari buku, penulis, kategori..."
            placeholderTextColor="#B7B3CB"
            style={styles.searchInput}
          />
        </View>

        <TouchableOpacity style={styles.filterToggle}>
          <Ionicons name="options-outline" size={16} color="#7C3AED" />
          <Text style={styles.filterToggleText}>Filter</Text>
        </TouchableOpacity>

        <Text style={styles.filterLabel}>Kategori</Text>
        <View style={styles.chipRow}>
          {categories.map((item, idx) => (
            <View key={item} style={[styles.chip, idx === 0 && styles.chipActive]}>
              <Text style={[styles.chipText, idx === 0 && styles.chipTextActive]}>
                {item}
              </Text>
            </View>
          ))}
        </View>

        <Text style={[styles.filterLabel, { marginTop: 16 }]}>Penulis</Text>
        <View style={styles.chipRow}>
          {writers.map((item, idx) => (
            <View key={item} style={[styles.chip, idx === 0 && styles.chipActive]}>
              <Text style={[styles.chipText, idx === 0 && styles.chipTextActive]}>
                {item}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.resultsCard}>
        <View style={styles.resultsHeader}>
          <View>
            <Text style={styles.sectionLabel}>Hasil Pencarian</Text>
            <Text style={styles.sectionSubLabel}>8 buku</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.sortLink}>Urutkan</Text>
          </TouchableOpacity>
        </View>

        {searchResults.map((book) => (
          <Link key={book.id} href="/book-detail" asChild>
            <TouchableOpacity style={styles.bookRow} activeOpacity={0.85}>
              <View style={styles.bookThumb} />
              <View style={styles.bookMeta}>
                <Text style={styles.bookTitle}>{book.title}</Text>
                <Text style={styles.bookDescription}>{book.description}</Text>
                <View style={styles.bookStats}>
                  <View style={styles.rating}>
                    <Ionicons name="star" size={12} color="#FBBF24" />
                    <Text style={styles.ratingText}>{book.rating}</Text>
                  </View>
                  <Text style={styles.detailLink}>Lihat detail</Text>
                </View>
              </View>
            </TouchableOpacity>
          </Link>
        ))}
      </View>
    </ScrollView>
  );
}

const baseShadow = Platform.select({
  ios: {
    shadowColor: "#5536DD",
    shadowOpacity: 0.12,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 14 },
  },
  android: {
    elevation: 8,
  },
}) as object;

const chipShadow = Platform.select({
  ios: {
    shadowColor: "#7C3AED",
    shadowOpacity: 0.18,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 8 },
  },
  android: {
    elevation: 4,
  },
}) as object;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDE7FF",
  },
  content: {
    padding: 24,
    paddingBottom: 120,
  },
  card: {
    borderRadius: 32,
    backgroundColor: "#FFFFFF",
    padding: 20,
    marginBottom: 20,
    ...baseShadow,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  cardTitleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F0EAFF",
    justifyContent: "center",
    alignItems: "center",
  },
  cardLabel: {
    fontSize: 12,
    color: "#C3BADF",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#22174B",
  },
  searchField: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#ECE8FF",
    paddingHorizontal: 14,
    height: 44,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: "#22174B",
  },
  filterToggle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 14,
  },
  filterToggleText: {
    color: "#7C3AED",
    fontWeight: "600",
    fontSize: 13,
  },
  filterLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: "#9791BA",
    marginTop: 12,
  },
  chipRow: {
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
    marginTop: 10,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#F5F1FF",
  },
  chipActive: {
    backgroundColor: "#7C3AED",
    ...chipShadow,
  },
  chipText: {
    fontSize: 12,
    color: "#8B84B1",
  },
  chipTextActive: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
  resultsCard: {
    borderRadius: 28,
    padding: 20,
    backgroundColor: "#F9F6FF",
    ...baseShadow,
  },
  resultsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
    alignItems: "flex-end",
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: "700",
    color: "#271F4A",
  },
  sectionSubLabel: {
    fontSize: 12,
    color: "#ACA8C5",
    marginTop: 4,
  },
  sortLink: {
    fontSize: 12,
    color: "#7C3AED",
    fontWeight: "600",
  },
  bookRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: 22,
    backgroundColor: "#FFFFFF",
    marginBottom: 12,
  },
  bookThumb: {
    width: 54,
    height: 70,
    borderRadius: 16,
    backgroundColor: "#E2DDFF",
    marginRight: 16,
  },
  bookMeta: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#342B57",
  },
  bookDescription: {
    fontSize: 12,
    color: "#8F88B9",
    marginVertical: 4,
  },
  bookStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#F59E0B",
  },
  detailLink: {
    fontSize: 12,
    color: "#7C3AED",
    fontWeight: "600",
  },
});

