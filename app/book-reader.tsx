import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { PageHeader } from "@/components/page-header";
import { BOOKS } from "@/constants/books";

export default function BookReaderScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ id?: string }>();
  const book = BOOKS.find((b) => b.id === params.id) ?? BOOKS[0];
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <PageHeader title="Baca Sekarang" showBack />

      <View style={styles.bodyCard}>
        <Text style={styles.bookTitle}>{book.title}</Text>
        <Text style={styles.bookAuthor}>{book.author}</Text>
        <Text style={styles.chapterLabel}>BAB 1 - Pendahuluan</Text>

        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
          nostrud exercitation ullamco laboris nisi .ut aliquip ex ea commodo
          consequat.
        </Text>
        <Text style={styles.paragraph}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </Text>
        <Text style={styles.paragraph}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam.
        </Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="chevron-back" size={18} color="#7C3AED" />
          <Text style={styles.navText}>Halaman 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>Halaman 2</Text>
          <Ionicons name="chevron-forward" size={18} color="#7C3AED" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7FA",
  },
  content: {
    paddingTop: 40,
    paddingHorizontal: 24,
    paddingBottom: 60,
  },
  bodyCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 24,
    marginBottom: 24,
  },
  bookTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2A1F55",
  },
  bookAuthor: {
    fontSize: 13,
    color: "#8F88B9",
    marginTop: 4,
  },
  chapterLabel: {
    fontSize: 12,
    color: "#8F88B9",
    marginVertical: 18,
  },
  paragraph: {
    fontSize: 14,
    color: "#433763",
    lineHeight: 24,
    marginBottom: 16,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  navButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  navText: {
    fontSize: 13,
    color: "#7C3AED",
    fontWeight: "600",
  },
});

