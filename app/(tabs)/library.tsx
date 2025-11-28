import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { BOOKS } from "@/constants/books";
import { PageHeader } from "@/components/page-header";

const categoryMap = BOOKS.reduce<Record<string, typeof BOOKS>>((acc, book) => {
  if (!acc[book.category]) {
    acc[book.category] = [];
  }
  acc[book.category].push(book);
  return acc;
}, {});

const categories = Object.keys(categoryMap);
const featuredBook = BOOKS[0];

export default function LibraryScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <PageHeader title="Library" subtitle="Koleksi kategorimu" />
      <LinearGradient
        colors={["#7F5BFF", "#B07CFF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.hero}
      >
        <Text style={styles.heroLabel}>Perpustakaanmu</Text>
        <Text style={styles.heroTitle}>{BOOKS.length} buku siap dibaca</Text>
        <Text style={styles.heroSubtitle}>
          Lanjutkan perjalanan membaca atau jelajahi kategori baru.
        </Text>
        <Link
          href={{ pathname: "/book-reader", params: { id: featuredBook.id } }}
          asChild
        >
          <TouchableOpacity style={styles.heroButton}>
            <Ionicons name="time-outline" size={16} color="#7C3AED" />
            <Text style={styles.heroButtonText}>Lanjutkan "{featuredBook.title}"</Text>
          </TouchableOpacity>
        </Link>
      </LinearGradient>

      <View style={styles.filterRow}>
        {categories.map((category) => (
          <View key={category} style={styles.filterChip}>
            <Text style={styles.filterChipText}>{category}</Text>
          </View>
        ))}
      </View>

      {categories.map((category) => (
        <View key={category} style={styles.categorySection}>
          <View style={styles.sectionHeader}>
            <View>
              <Text style={styles.sectionLabel}>{category}</Text>
              <Text style={styles.sectionCaption}>
                {categoryMap[category].length} buku tersedia
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color="#C9C2EF" />
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.cardRow}>
              {categoryMap[category].map((book) => (
                <Link
                  key={book.id}
                  href={{ pathname: "/book-detail", params: { id: book.id } }}
                  asChild
                >
                  <TouchableOpacity activeOpacity={0.85} style={styles.bookCard}>
                    <View style={styles.bookCover} />
                    <Text style={styles.bookTitle}>{book.title}</Text>
                    <Text style={styles.bookAuthor}>{book.author}</Text>
                    <View style={styles.bookMetaRow}>
                      <Ionicons name="star" size={12} color="#F6C343" />
                      <Text style={styles.bookMetaText}>{book.rating.toFixed(1)}</Text>
                    </View>
                  </TouchableOpacity>
                </Link>
              ))}
            </View>
          </ScrollView>
        </View>
      ))}
    </ScrollView>
  );
}

const cardShadow = Platform.select({
  ios: {
    shadowColor: "#5B3FE1",
    shadowOpacity: 0.12,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 12 },
  },
  android: {
    elevation: 10,
  },
}) as object;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F0FF",
  },
  content: {
    padding: 24,
    paddingBottom: 120,
  },
  hero: {
    borderRadius: 32,
    padding: 24,
    marginBottom: 24,
    ...cardShadow,
  },
  heroLabel: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 12,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  heroTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "700",
    marginTop: 10,
  },
  heroSubtitle: {
    color: "rgba(255,255,255,0.75)",
    fontSize: 13,
    marginTop: 6,
    lineHeight: 18,
  },
  heroButton: {
    marginTop: 18,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 14,
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  heroButtonText: {
    color: "#7C3AED",
    fontWeight: "600",
    fontSize: 12,
  },
  filterRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 24,
  },
  filterChip: {
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    paddingVertical: 8,
    paddingHorizontal: 14,
    ...cardShadow,
  },
  filterChipText: {
    fontSize: 12,
    color: "#4F447D",
    fontWeight: "600",
  },
  categorySection: {
    marginBottom: 28,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2E1F63",
  },
  sectionCaption: {
    fontSize: 12,
    color: "#9C94C1",
    marginTop: 4,
  },
  cardRow: {
    flexDirection: "row",
    gap: 16,
  },
  bookCard: {
    width: 140,
    backgroundColor: "#FFFFFF",
    borderRadius: 26,
    padding: 14,
    ...cardShadow,
  },
  bookCover: {
    width: "100%",
    height: 120,
    borderRadius: 18,
    backgroundColor: "#ECE5FF",
    marginBottom: 12,
  },
  bookTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#2E1F63",
  },
  bookAuthor: {
    fontSize: 11,
    color: "#8C84B4",
    marginTop: 4,
  },
  bookMetaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 8,
  },
  bookMetaText: {
    fontSize: 11,
    color: "#7C3AED",
    fontWeight: "600",
  },
});

