import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
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

import { PageHeader } from "@/components/page-header";
import { BOOKS } from "@/constants/books";

const bookPlaceholders = BOOKS.slice(0, 6);

const audiobookPlaceholders = [
  { id: "audio-1", title: "Lorem ipsum dolor...", duration: "5h 35m" },
  { id: "audio-2", title: "Lorem ipsum dolor...", duration: "4h 55m" },
  { id: "audio-3", title: "Lorem ipsum dolor...", duration: "6h 35m" },
];

const SectionTitle = ({ title }: { title: string }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.sectionAccent} />
  </View>
);

const BookPlaceholderCard = ({ book }: { book: (typeof BOOKS)[number] }) => (
  <Link
    href={{ pathname: "/book-detail", params: { id: book.id } }}
    asChild
  >
    <TouchableOpacity activeOpacity={0.9} style={styles.bookCard}>
      <View style={styles.bookCover} />
      <Text style={styles.bookTitle}>{book.title}</Text>
      <Text style={styles.bookSubtitle}>{book.author}</Text>
    </TouchableOpacity>
  </Link>
);

const AudiobookCard = ({
  title,
  duration,
}: {
  title: string;
  duration: string;
}) => (
  <View style={styles.audioCard}>
    <View style={styles.audioMeta}>
      <View style={styles.audioThumb} />
      <View style={styles.audioTextWrapper}>
        <Text style={styles.audioTitle}>{title}</Text>
        <Text style={styles.audioSubtitle}>Lorem ipsum dolor...</Text>
      </View>
    </View>
    <Text style={styles.audioDuration}>{duration}</Text>
  </View>
);

export default function Dashboard() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <PageHeader
        title="Dashboard"
        subtitle="Hai, Veritas!"
        rightSlot={
          <TouchableOpacity style={styles.notificationBtn}>
            <Ionicons name="notifications-outline" size={20} color="#7C3AED" />
          </TouchableOpacity>
        }
      />

      <LinearGradient
        colors={["#6A4AF6", "#AE6BFF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.hero}
      >
        <View style={styles.heroHeader}>
          <View>
            <Text style={styles.heroSubheading}>Veritas Library</Text>
            <Text style={styles.heroTitle}>Hai, Veritas!</Text>
            <Text style={styles.heroBody}>
              Cari buku, penulis, atau kategori favoritmu.
            </Text>
          </View>
          <View style={styles.heroBadge}>
            <Text style={styles.heroBadgeText}>V</Text>
          </View>
        </View>

        <View style={styles.searchWrapper}>
          <Ionicons name="search" size={16} color="#FFFFFF" />
          <TextInput
            placeholder="Cari buku, penulis, kategori..."
            placeholderTextColor="#FFFFFFB3"
            style={styles.searchInput}
          />
        </View>
      </LinearGradient>

      <View style={styles.section}>
        <SectionTitle title="Rekomendasi untukmu" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.bookList}>
            {bookPlaceholders.map((item) => (
              <BookPlaceholderCard key={item.id} book={item} />
            ))}
          </View>
        </ScrollView>
      </View>

      <View style={styles.section}>
        <SectionTitle title="Buku terpopuler" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.bookList}>
            {bookPlaceholders.map((item) => (
              <BookPlaceholderCard key={`popular-${item.id}`} book={item} />
            ))}
          </View>
        </ScrollView>
      </View>

      <View style={styles.section}>
        <SectionTitle title="Audiobook pilihan" />
        <View style={styles.audioWrapper}>
          {audiobookPlaceholders.map((audio) => (
            <AudiobookCard
              key={audio.id}
              title={audio.title}
              duration={audio.duration}
            />
          ))}
        </View>
      </View>

    </ScrollView>
  );
}

const shadow = Platform.select({
  ios: {
    shadowColor: "#6A4AF6",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 12 },
    shadowRadius: 20,
  },
  android: {
    elevation: 10,
  },
}) as object;

const cardShadow = Platform.select({
  ios: {
    shadowColor: "#6A4AF6",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 16,
  },
  android: {
    elevation: 6,
  },
}) as object;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F2FF",
  },
  content: {
    padding: 24,
    paddingBottom: 120,
  },
  notificationBtn: {
    width: 40,
    height: 40,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  hero: {
    borderRadius: 32,
    paddingHorizontal: 24,
    paddingVertical: 28,
    marginBottom: 32,
    ...shadow,
  },
  heroHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 24,
  },
  heroSubheading: {
    color: "#FFFFFF",
    fontSize: 12,
    marginBottom: 6,
  },
  heroTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "700",
  },
  heroBody: {
    color: "rgba(255,255,255,0.85)",
    fontSize: 13,
    marginTop: 8,
    width: 200,
    lineHeight: 18,
  },
  heroBadge: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  heroBadgeText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 18,
  },
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 20,
    paddingHorizontal: 16,
    height: 46,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    color: "#FFFFFF",
    fontSize: 14,
  },
  section: {
    marginBottom: 28,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#27204B",
  },
  sectionAccent: {
    width: 42,
    height: 3,
    borderRadius: 999,
    backgroundColor: "#AA8BFF",
  },
  bookList: {
    flexDirection: "row",
    columnGap: 16,
  },
  bookCard: {
    width: 115,
    height: 172,
    borderRadius: 28,
    backgroundColor: "#FFFFFF",
    padding: 14,
    justifyContent: "flex-end",
    ...cardShadow,
  },
  bookCover: {
    position: "absolute",
    top: 14,
    left: 14,
    right: 14,
    height: 90,
    borderRadius: 22,
    backgroundColor: "#F2EFFE",
  },
  bookTitle: {
    fontSize: 12,
    fontWeight: "600",
    color: "#3F3A60",
  },
  bookSubtitle: {
    fontSize: 11,
    color: "#9C9AB1",
    marginTop: 4,
  },
  audioWrapper: {
    backgroundColor: "#F8F5FF",
    borderRadius: 28,
    padding: 16,
  },
  audioCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 12,
    ...cardShadow,
  },
  audioMeta: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  audioThumb: {
    width: 48,
    height: 48,
    borderRadius: 18,
    backgroundColor: "#E8E2FF",
  },
  audioTextWrapper: {
    marginLeft: 14,
    flex: 1,
  },
  audioTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#3F3A60",
  },
  audioSubtitle: {
    fontSize: 12,
    color: "#9C9AB1",
    marginTop: 4,
  },
  audioDuration: {
    fontSize: 12,
    fontWeight: "600",
    color: "#7C3AED",
  },
});

